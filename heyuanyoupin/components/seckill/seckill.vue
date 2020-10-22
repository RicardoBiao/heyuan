<template>
	<view class="seckill">
		<view class="seckill-title">
			<text class="seckill-title-left">限时秒杀</text>
			<text class="seckill-title-right">仅剩{{seckillDetail.seckillDay}}天 {{seckillDetail.seckillDate}}</text>
		</view>
		<scroll-view 
		scroll-x="true" 
		class="seckill-scroll" 
		show-scrollbar="true"
		style=" white-space: nowrap; display: flex"
		>
			<view class="sku-box" v-for=" item in seckillList">
				<image class="sku-img" :src="item.img_url" src="../../static/logo.png" mode=""></image>
				<view class="sku-name"> {{item.sku_name}} </view>
				<view class="price-box">
					<text class="price">¥{{item.price}}</text>
					<image class="buy" src="../../static/logo.png" mode=""></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:'seckill',
		props: {
			seckillList: {
				type: Array,
				default: function () {
					return [];
				}
			},
			seckillDetail: {
				type: Object,
				default: function () {
					return {};
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.seckill {
		margin-top: 40rpx;
		.seckill-title {
			display: flex;
			justify-content: space-between;
			.seckill-title-left {
				border-left: solid #fc1316 10rpx;
				padding-left: 10rpx;
				font-size: 36rpx;
			}
			.seckill-title-right {
				font-size: 28rpx;
			}
		}
		.seckill-scroll {
			height: 380rpx;
			.sku-box {
				display: inline-block;
				width: 220rpx;
				text-align: center;
				margin: 40rpx 20rpx 0 20rpx;
				.sku-img {
					width: 220rpx;
					height: 220rpx;
				}
				.sku-name {
					width: 220rpx;
					height: 30rpx;
					margin: 15rpx 0;
					line-height: 30rpx;
					font-size: 30rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.price-box {
					display: flex;
					justify-content: space-between;
					// width: 200rpx;
					height: 40rpx;
					.price {
						color: red;
					}
					.buy {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
		}
	}
</style>
