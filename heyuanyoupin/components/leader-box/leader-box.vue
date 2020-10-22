<template>
	<view class="leader-box">
		<view class="leader-box-left">
			<text style="font-size: 36rpx; line-height: 36rpx;">{{leader.leaderAddress}} > </text>
			<text>{{leader.addressDetail}}</text>
		</view>
		<view class="leader-box-right">
			<image src="../static/logo.png" mode=""></image>
			<text>{{leader.leaderName}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:'leaderBox',
		props: {
			leader: {
				type: ''
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.leader-box {
		display: flex;
		justify-content: space-between;
		.leader-box-left {
			height: 130rpx;
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			font-size: 24rpx;
			line-height: 24rpx;
		}
		.leader-box-right {
			height: 130rpx;
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			font-size: 28rpx;
			line-height: 28rpx;
			text-align: center;
			image {
				width: 10vw;
				height: 10vw;
				border-radius: 50%;
				background-color: red;
			}
			text {
				margin-top: 10rpx;
			}
		}
	}
</style>
