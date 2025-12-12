<template>
	<view class="bgColor">
		<!-- 收付款和钱包卡片 -->
		<view class="card-section">
			<view class="card-container">
				<view class="card-item">
					<uni-icons type="scan" size="50" color="#FFFFFF"></uni-icons>
					<text class="card-text">收付款</text>
				</view>
				<view class="card-item">
					<uni-icons type="wallet" size="50" color="#FFFFFF"></uni-icons>
					<text class="card-text">钱包</text>
					<span class="top-card-balance-text">¥9999999.00</span>
				</view>
			</view>
		</view>		
		<!-- 金融理财 -->
		<view class="section">
			<view class="section-title">金融理财</view>
			<view class="service-grid">
				<view class="service-item">
					<img src="/static/icons/creditcard.png" class="service-icon">
					<text class="service-text">信用卡还款</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/weilidai.png" class="service-icon">
					<text class="service-text">微粒贷借钱</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/licai.png" class="service-icon">
					<text class="service-text">理财通</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/insurance.png" class="service-icon">
					<text class="service-text">保险服务</text>
				</view>
			</view>
		</view>

		<!-- 生活服务 -->
		<view class="section">
			<view class="section-title">生活服务</view>
			<view class="service-grid">
				<view class="service-item">
					<img src="/static/icons/phone.png" class="service-icon">
					<text class="service-text">手机充值</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/bill.png" class="service-icon">
					<text class="service-text">生活缴费</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/qcoin.png" class="service-icon">
					<text class="service-text">Q币充值</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/city.png" class="service-icon">
					<text class="service-text">城市服务</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/charity.png" class="service-icon">
					<text class="service-text">腾讯公益</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/medical.png" class="service-icon">
					<text class="service-text">医疗健康</text>
				</view>
			</view>
		</view>

		<!-- 交通出行 -->
		<view class="section">
			<view class="section-title">交通出行</view>
			<view class="service-grid">
				<view class="service-item">
					<img src="/static/icons/trip.png" class="service-icon">
					<text class="service-text">出行服务</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/train.png" class="service-icon">
					<text class="service-text">火车票机票</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/taxi.png" class="service-icon">
					<text class="service-text">滴滴出行</text>
				</view>
				<view class="service-item">
					<img src="/static/icons/hotel.png" class="service-icon">
					<text class="service-text">酒店民宿</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			services: []
		};
	},
	onLoad() {
		this.initData();
	},
	methods: {
		initData() {
			this.services = [];
		}
	}
};
</script>

<style scoped>
	.bgColor {
		background-color: #F5F5F5;
		min-height: 100vh;
	}

	.card-section {
		padding: 0rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
	}

	.card-container {
		display: flex;
		background-color: #07C160;
		border-radius: 12rpx;
		overflow: hidden;
		height: 170px;
	}

	.card-item {
		flex: 1;
		padding: 40rpx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
	}



	.card-text {
		margin-top: 10rpx;
		font-size: 32rpx;
	}

	.section {
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		padding: 20rpx;
	}

	.section-title {
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.service-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20rpx;
	}

	.service-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx 0;
	}

	.service-text {
		margin-top: 10rpx;
		font-size: 24rpx;
		color: #333333;
		text-align: center;
		line-height: 32rpx;
	}

	.service-icon {
		width: 80rpx;
		height: 80rpx;
		object-fit: contain;
	}
	.top-card-balance-text{
		color: #8CDAA6;
	}
</style>
