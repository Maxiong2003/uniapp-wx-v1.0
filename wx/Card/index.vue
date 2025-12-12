<template>
	<view class="page">

		<!-- 顶部导航 -->
		<view class="header">
			<text class="header-title">卡包</text>
		</view>

		<!-- 顶部卡片：收付款 + 钱包 -->
		<view class="top-card-wrapper">
			<view class="top-card">
				<view class="top-card-item">
					<uni-icons type="scan" size="48" color="#FFFFFF"></uni-icons>
					<text class="top-card-text">收付款</text>
				</view>

				<view class="top-card-item">
					<uni-icons type="wallet" size="48" color="#FFFFFF"></uni-icons>
					<text class="top-card-text">钱包</text>
				</view>
			</view>
		</view>

		<!-- 会员卡 -->
		<view class="section">
			<text class="section-title">会员卡</text>

			<view class="empty-box">
				<uni-icons type="vip" size="50" color="#C8C8C8"></uni-icons>
				<text class="empty-text">暂无会员卡</text>
				<view class="empty-btn">+ 添加会员卡</view>
			</view>
		</view>

		<!-- 优惠券 -->
		<view class="section">
			<text class="section-title">优惠券</text>

			<view class="empty-box">
				<uni-icons type="ticket" size="50" color="#C8C8C8"></uni-icons>
				<text class="empty-text">暂无优惠券</text>
				<view class="empty-btn">+ 添加优惠券</view>
			</view>
		</view>

		<!-- 商家卡券 -->
		<view class="section">
			<text class="section-title">商家卡券</text>

			<view class="empty-box">
				<uni-icons type="gift" size="50" color="#C8C8C8"></uni-icons>
				<text class="empty-text">暂无商家卡券</text>
				<view class="empty-btn">+ 添加商家卡券</view>
			</view>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style scoped>
.page {
	background-color: #F5F5F5;
	min-height: 100vh;
}

/* 顶部导航 */
.header {
	height: 90rpx;
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	font-size: 34rpx;
	border-bottom: 1px solid #ECECEC;
}

.header-title {
	color: #000;
}

/* 顶部卡片（微信同款） */
.top-card-wrapper {
	padding: 30rpx;
}

.top-card {
	background: linear-gradient(135deg, #2AAD67, #139C4C);
	height: 250rpx;
	border-radius: 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.1);
}

/* 左右菜单 */
.top-card-item {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #FFFFFF;
}

.top-card-text {
	margin-top: 12rpx;
	font-size: 30rpx;
	font-weight: 600;
}



/* 区域标题 */
.section {
	background-color: #FFFFFF;
	margin-top: 20rpx;
	padding: 0 30rpx;
}

.section-title {
	height: 80rpx;
	line-height: 80rpx;
	font-size: 28rpx;
	color: #666;
	font-weight: 500;
	border-bottom: 1px solid #EEE;
}

/* 空状态 */
.empty-box {
	padding: 80rpx 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.empty-text {
	margin-top: 20rpx;
	font-size: 26rpx;
	color: #999;
}

.empty-btn {
	margin-top: 25rpx;
	padding: 16rpx 40rpx;
	border-radius: 40rpx;
	border: 1px solid #07C160;
	color: #07C160;
	font-size: 26rpx;
}
</style>
