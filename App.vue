<script>
	import {
		version,
		name
	} from './package.json'
	import {
		versionName
	} from '@/manifest.json'
	import consoleImgs from '@/common/consoleImgs.js'
	// 导入测试用户配置
	import testUser from '@/common/testUser.js'
	// #ifdef APP-PLUS
	import appUpgrade from '@/common/appUpgrade.js';
	const TUICalling = uni.requireNativePlugin("TUICallingUniPlugin-TUICallingModule");
	// #endif
	export default {
		onLaunch: function() {
			// #ifdef H5
			console.log(
				`%c Team ${name} %c v${version} `,
				'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
				'background:#007aff ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;'
			)
			console.log(consoleImgs.fz)
			// todo 下列两行
			uni.setStorageSync('device', 'H5');
			uni.setStorageSync('version', versionName);
			this.$http.request({
				url: '/common/getVersion',
				success: (res) => {
					if(res.data.data.upgrade=='Y'){
						console.log(
							`%c 有新版本 `+res.data.data.version,
							'background:#007aff ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;'
						)
					}
				}
			});
			// #endif
			console.log('App Launch')
			
			// 检查是否启用测试用户
			if (testUser.enable) {
				console.log('启用测试用户绕过登录')
				// 设置测试用户token
				uni.setStorageSync('Authorization', testUser.user.token);
				
				// 直接设置用户信息到store
				this.$store.commit('update_UserInfo', JSON.stringify(testUser.user.userInfo));
				
				// #ifdef H5
				this.$socketTask.connectSocket()
				// #endif
				
				// 模拟音视频登录
				// #ifdef APP-PLUS
				try {
					// 由于是测试用户，可能不需要真实的音视频登录，这里尝试模拟
					var nickName = testUser.user.userInfo.nickName;
					var portrait = testUser.user.userInfo.portrait;
					
					console.log('测试用户音视频登录模拟成功')
					TUICalling.setUserNickname({
					    nickName: nickName
					})
					TUICalling.setUserAvatar({
					    avatar: portrait
					})
					
					var nowCid=plus.push.getClientInfo().clientid
					uni.setStorageSync('cid', nowCid);
				} catch (e) {
					console.log('测试用户音视频登录模拟失败:', e)
				}
				// #endif
				
				// 初始化测试联系人的聊天列表
				let chatlistData = {};
				testUser.contacts.forEach(contact => {
					chatlistData[contact.userId] = {
						userId: contact.userId,
						personId: testUser.user.userInfo.userId,
						nickName: contact.nickName,
						portrait: contact.portrait,
						content: "你好，很高兴认识你！",
						time: new Date().toISOString(),
						num: 0,
						windowType: 'SINGLE',
						disturb: 'N',
						top: 'N',
						userType: 'SINGLE'
					};
				});
				
				// 保存到本地存储
				uni.setStorageSync(
					testUser.user.userInfo.userId + '_chatlistData', 
					JSON.stringify(chatlistData)
				);
				
				// 初始化聊天数据
				let chatData = {};
				testUser.contacts.forEach(contact => {
					chatData[contact.userId] = {
						fromInfo: {
							nickName: contact.nickName,
							portrait: contact.portrait,
							userId: contact.userId,
							userType: 'SINGLE'
						},
						groupInfo: {},
						list: [
							{
								date: new Date().toISOString().split('T')[0],
								list: [
									{
										content: "你好，很高兴认识你！",
										createDate: new Date().toISOString(),
										msgType: "TEXT",
										sendBy: contact.userId
									}
								]
							}
						]
					};
				});
				
				// 保存聊天数据到本地存储
				uni.setStorageSync(
					testUser.user.userInfo.userId + '_chatData', 
					JSON.stringify(chatData)
				);
				
				// 跳转到主页面
				uni.reLaunch({
					url: "wx/tabbar1/index",
				}).then(res=>{
					// #ifdef APP-PLUS
					plus.navigator.closeSplashscreen();
					// #endif
				})
			} else {
				// 正常登录流程
				let token= uni.getStorageSync('Authorization');
				if (!token) {
					//不存在则跳转至登录页
					// #ifdef APP-PLUS
					plus.navigator.closeSplashscreen();
					// #endif
				} else {
					// #ifdef H5
					this.$socketTask.connectSocket()
					// #endif
					this.$store.dispatch('get_UserInfo').then(res=>{
						// #ifdef APP-PLUS
						var nickName=res.nickName
						var portrait=res.portrait
						this.$http.request({
							url: '/trtc/getSign',
							success: (res) => {
								var sdkAppID=res.data.data.appId
								var userID=res.data.data.userId
								var userSig=res.data.data.sign
								TUICalling.login({//登录音视频
								    sdkAppID: sdkAppID, 
								    userID: userID,
								    userSig: userSig
								},(res) => {
								    console.log('音视频登录成功')
									TUICalling.setUserNickname({
									    nickName: nickName
									})
									TUICalling.setUserAvatar({
									    avatar: portrait
									})
									plus.io.requestFileSystem(plus.io.PRIVATE_WWW, function(fs) {
									    fs.root.getFile('/static/longcall.mp3', {
									        create: false
									    }, function(fileEntry) {
									        fileEntry.file(function(file) {
												TUICalling.setCallingBell({
												    ringtone: file.fullPath
												},(res) => {
													console.log(JSON.stringify(res))
												})
											});
									    });
									});
									
								})
							}
						});
						var nowCid=plus.push.getClientInfo().clientid
						this.$http.request({
							url: '/my/bindCid/'+nowCid,
							success: (res) => {
								console.log('新cid'+nowCid)
								uni.setStorageSync('cid', nowCid);
							}
						});
						// #endif
					})
					uni.reLaunch({
						url: "wx/tabbar1/index",
					}).then(res=>{
						// #ifdef APP-PLUS
						plus.navigator.closeSplashscreen();
						// #endif
					})
				}
			}
			// #ifdef APP-PLUS
			//升级检测
			uni.getSystemInfo({
				success: (res)=> {
					uni.setStorageSync('device', res.platform);
					plus.runtime.getProperty(plus.runtime.appid, (widgetInfo)=> {
						uni.setStorageSync('version', widgetInfo.version);
						this.$http.request({
							url: '/common/getVersion',
							success: (res) => {
								if(res.data.data.upgrade=='Y'){
									appUpgrade.init({
										titleText: '版本更新'+res.data.data.version,
										packageUrl:res.data.data.url,
										content: res.data.data.content,
										forceUpgrade:res.data.data.forceUpgrade=='Y' ? true : false
									});
									appUpgrade.show();
								}
							}
						});
					});
				}
			});
			uni.onNetworkStatusChange( (res)=> {
				if(res.isConnected){
					this.$store.dispatch('get_UserInfo')
				}
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
			uni.getStorage({
				key: 'call',
				success: (res) => {
					var callx=res.data
					if(callx){
						var call=JSON.parse(callx)
						function getInervalHour(startDate) {//获取两个时间之间的小时
							if (!startDate) {
								return '0秒'
							}
							var ms = new Date().getTime() - startDate;
							if (ms < 0) return '0秒';
							if((ms/1000)<60){
								return Math.floor(ms / 1000)+'秒';
							}else{
								return Math.floor(ms / 1000 /60)+'分';
							}
						}
						var msgType=''
						if(call.type=='audio'){
							msgType='TRTC_VOICE_END'
						}
						if(call.type=='video'){
							msgType='TRTC_VIDEO_END'
						}
						this.$fc.pushOutMsg({
							msgContent:getInervalHour(call.startTime),
							msgType:msgType,
							windowType:'SINGLE',
							userId:call.userId,
						})
						uni.removeStorageSync('call')
					}
				}
			});
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import "@/static/styles/animation.css";
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		box-sizing: border-box;
	}

	/* #endif */
	
	// 以下内容最好转移到单页
	
</style>
