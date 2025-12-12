<template>
	<view class="wx-createGroup" :style="'height: calc(100vh - ' + windowTop + 'px)'">
		<view class="wx-createGroup-check">
			<uni-indexed-list-wx 
				showSelect 
				:showAdd="false" 
				:options="list" 
				@click="bindClick"
			></uni-indexed-list-wx>
		</view>

		<view class="wx-createGroup-foot">
			<view class="wx-btn wx-btn-info" @click="createGroup">
				完成
				<text v-if="select.length > 0">({{ select.length }})</text>
			</view>
		</view>
	</view>
</template>

<script>
import testUser from '../../common/testUser.js'

export default {
	data() {
		return {
			detail: { user: [] },
			list: [],
			select: [],
			windowTop: 0,
			groupId: ''
		};
	},

	onLoad(e) {
		this.groupId = e.groupId;
	},

	mounted() {
		this.getflist();
		uni.getSystemInfo({
			success: res => {
				this.windowTop = res.windowTop;
			}
		});
	},

	methods: {

		/* ---------------------------
		   工具方法：过滤数组
		------------------------------ */
		// 去掉 arr1 中已存在的
		leesData(arr1, arr2, key) {
			return arr2.filter(i2 => !arr1.some(i1 => i1[key] === i2[key]));
		},

		// 保留 arr1 中已存在的
		leesDataRE(arr1, arr2, key) {
			return arr2.filter(i2 => arr1.some(i1 => i1[key] === i2[key]));
		},

		/* ---------------------------
		   创建或邀请群成员
		------------------------------ */
		createGroup() {
			if (this.select.length <= 0) {
				uni.showToast({
					title: '未选择',
					icon: 'none'
				});
				return;
			}

			// 只提交 addtype === 'N' 的用户
			const ids = this.select
				.filter(item => item.data.addtype === 'N')
				.map(item => item.data.userId);

			const formData = {
				groupId: this.groupId,
				list: ids
			};

			this.$http.request({
				url: '/group/invitationGroup',
				method: 'POST',
				data: JSON.stringify(formData),
				success: res => {
					if (res.data.code === 200) {
						uni.navigateBack({ delta: 1 }).then(() => {
							uni.showToast({
								title: '已邀请',
								icon: 'none'
							});
						});
					}
				}
			});
		},

		bindClick(e) {
			this.select = e.select;
		},

		/* ---------------------------
		   获取好友列表 + 群成员整合
		------------------------------ */
		getflist() {

			// ⭐ 测试模式
			if (testUser.enable) {
				this.detail = { user: [{ userId: "contact-001", name: "张三" }] };

				const allContacts = testUser.contacts.filter(c => c.userType === "normal");

				const data1 = this.leesData(this.detail.user, allContacts, 'userId'); // 可添加
				const data2 = this.leesDataRE(this.detail.user, allContacts, 'userId'); // 已在群

				const newlist = [
					...data1.map(item => ({
						name: item.nickName,
						avatar: item.portrait,
						userId: item.userId,
						chatNo: item.chatNo,
						addtype: 'N',
						checked: false
					})),
					...data2.map(item => ({
						name: item.nickName,
						avatar: item.portrait,
						userId: item.userId,
						chatNo: item.chatNo,
						addtype: 'Y',
						checked: true
					}))
				];

				this.list = this.$fc.sortList({ list: newlist, key: 'name' });
				return;
			}

			// ⭐ 真实模式：先查群信息 → 再查好友
			this.$http.request({
				url: '/group/getInfo/' + this.groupId,
				success: res => {
					if (res.data.code !== 200) return;
					this.detail = res.data.data;

					this.$http.request({
						url: '/friend/friendList',
						method: 'POST',
						data: JSON.stringify({}),
						success: res2 => {

							if (res2.data.code !== 200) return;

							const friends = res2.data.data
								.filter(f => f.userType === 'normal')
								.map(f => ({
									name: f.nickName,
									avatar: f.portrait,
									userId: f.userId,
									chatNo: f.chatNo
								}));

							const data1 = this.leesData(this.detail.user, friends, 'userId');
							const data2 = this.leesDataRE(this.detail.user, friends, 'userId');

							const newlist = [
								...data1.map(item => ({
									...item,
									addtype: 'N',
									checked: false
								})),
								...data2.map(item => ({
									...item,
									addtype: 'Y',
									checked: true
								}))
							];

							this.list = this.$fc.sortList({ list: newlist, key: 'name' });
						}
					});
				}
			});
		}
	}
};
</script>

<style scoped>
.wx-createGroup {
	display: flex;
	flex-direction: column;
}

.wx-createGroup-check {
	height: 90%;
	position: relative;
}

.wx-createGroup-foot {
	box-sizing: border-box;
	height: 10%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	background-color: #eee;
	padding: 24rpx;
}

.wx-btn {
	min-width: 200rpx;
	height: 75rpx;
	line-height: 75rpx;
	text-align: center;
	border-radius: 12rpx;
	background-color: #007aff;
	color: #fff;
	font-size: 32rpx;
}

.wx-btn-info {
	background-color: #05c160;
}
</style>
