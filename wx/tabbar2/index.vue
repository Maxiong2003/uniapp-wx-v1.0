<template>
	<view class="xw-book">
		<uni-indexed-list-wx :options="list" @click="bindClick"></uni-indexed-list-wx>
		<top-right-tool-wx ref="trtw"></top-right-tool-wx>
	</view>
</template>

<script>
	// 导入测试用户配置
	import testUser from '../../common/testUser.js'
		export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {},
		onShow() {
			this.getflist()
			this.$store.dispatch('tabBarpull')
		},
		methods: {
			bindClick(e){
				// 直接跳转到聊天窗口
				uni.navigateTo({
					url:'../chatWindow/index?userId='+e.item.data.userId+'&windowType=SINGLE'
				})
			},
			getflist(){
				// 如果启用了测试用户模式，使用模拟联系人数据
				if (testUser.enable) {
					var data = testUser.contacts
					var list = []
					for (var i = 0; i < data.length; i++) {
						var item = data[i]
						list.push({
							name: item.nickName,
							avatar: item.portrait,
							userId: item.userId,
							userType: item.userType,
							chatNo: item.chatNo
						})
					}
					this.list = this.$fc.sortList({ list: list, key: 'name' })
				} else {
					// 否则调用真实API获取好友列表
					this.$http.request({
						url: '/friend/friendList',
						method: 'POST',
						data: JSON.stringify({}),
						success: (res) => {
							if (res.data.code == 200) {
								var data = res.data.data
								var list = []
								for (var i = 0; i < data.length; i++) {
									var item = data[i]
									list.push({
										name: item.nickName,
										avatar: item.portrait,
										userId: item.userId,
										userType: item.userType,
										chatNo: item.chatNo
									})
								}
								this.list = this.$fc.sortList({ list: list, key: 'name' })
							}
						}
					});
				}
			},
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0: //更多
					this.$refs['trtw'].showTab();
					break;
				case 1: //搜索
					uni.navigateTo({
						url: '../search/index'
					});
					break;
				default:
					break;
			}
		},
	}
</script>

<style scoped>
	
</style>
