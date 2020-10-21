<template>
	<view class="content">
		<view class="leader-box">
			<view class="leader-box-left">
				<text style="font-size: 36rpx; line-height: 36rpx;">{{leaderAddress}} > </text>
				<text>{{addressDetail}}</text>
			</view>
			<view class="leader-box-right">
				<image src="../static/logo.png" mode=""></image>
				<text>{{leaderName}}</text>
			</view>
		</view>
		
		<input class="search" type="text" value="" placeholder="搜索商品"/>
		
		<swiper 
		class="banner"
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		
		<view class="kill">
			<view class="kill-title">
				<text class="kill-title-left">限时秒杀</text>
				<text class="kill-title-right">仅剩{{killDay}}天 {{killDate}}</text>
			</view>
			<scroll-view 
			scroll-x="true" 
			class="kill-scroll" 
			show-scrollbar="true"
			style=" white-space: nowrap; display: flex"
			>
				<view class="sku-box">
					<image class="sku-img" src="../../../static/logo.png" mode=""></image>
					<view class="sku-name"> {{addressDetail}} </view>
					<view class="price-box">
						<text class="price">¥198.00</text>
						<image class="buy" src="../../../static/logo.png" mode=""></image>
					</view>
				</view>
				<view class="sku-box">
					<image class="sku-img" src="../../../static/logo.png" mode=""></image>
					<view class="sku-name"> {{addressDetail}} </view>
					<view class="price-box">
						<text class="price">¥198.00</text>
						<image class="buy" src="../../../static/logo.png" mode=""></image>
					</view>
				</view>
				<view class="sku-box">
					<image class="sku-img" src="../../../static/logo.png" mode=""></image>
					<view class="sku-name"> {{addressDetail}} </view>
					<view class="price-box">
						<text class="price">¥198.00</text>
						<image class="buy" src="../../../static/logo.png" mode=""></image>
					</view>
				</view>
				<view class="sku-box">
					<image class="sku-img" src="../../../static/logo.png" mode=""></image>
					<view class="sku-name"> {{addressDetail}} </view>
					<view class="price-box">
						<text class="price">¥198.00</text>
						<image class="buy" src="../../../static/logo.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<group-buy :groupData="groupData"></group-buy>
		<!-- <view v-for="(item,index) in groupData" :key="item" class="group-box">
			<view class="group-box-left">
				<image class="img" src="../../../static/logo.png" mode=""></image>
			</view>
			<view class="group-box-right">
				<view class="text-box">
					<text class="group-title"> {{item.title}} </text>
					<text class="group-label">{{item.label}}</text>
					<text class="group-num"> {{item.group_num}} </text>
					<text class="group-label"> 已拼{{item.had_buy_num}}件 </text>
				</view>
				<view class="price-box">
					<text class="price"> ¥{{item.price}} </text>
					<view class="label-price">
						<text> ¥{{item.label_price}} </text>
					</view>
					<button class="btn" type="default"> 去拼团 </button>
				</view>
				
			</view>
		</view> -->
		<view class="share-btn" style="bottom: 33vw; margin-right: 20rpx;">
			<image  src="../../../static/share.png" mode=""></image>
			<text>分享</text>
		</view>
		<view class="share-btn" style="bottom: 13vw; margin-right: 20rpx;">
			<image  src="../../../static/customerService.png" mode=""></image>
			<text>客服</text>
		</view>
	</view>
</template>

<script>
	import groupBuy from '@/components/group-buy/group-buy.vue';
	export default {
		data() {
			return {
				leaderAddress: '佛山_保利心语花园',
				addressDetail: '广东省佛山市南海区桂城街道保利西雅图三期',
				leaderName: '卢毅',
				leaderImg: '',
				killDay: '20',
				killDate: '05:25:17',
				groupData: [
					{
						img:'',
						title: '【港荣蒸蛋糕】港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						label: '好吃不上火好吃不上火好吃不上火好吃不上火',
						group_num: '5人团',
						had_buy_num: 9,
						price: 129.00,
						label_price: 139.99
					},{
						img:'',
						title: '【港荣蒸蛋糕】港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						label: '好吃不上火好吃不上火好吃不上火好吃不上火',
						group_num: '5人团',
						had_buy_num: 9,
						price: 129.00,
						label_price: 139.99
					},{
						img:'',
						title: '【港荣蒸蛋糕】港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						label: '好吃不上火好吃不上火好吃不上火好吃不上火',
						group_num: '5人团',
						had_buy_num: 9,
						price: 129.00,
						label_price: 139.99
					},{
						img:'',
						title: '【港荣蒸蛋糕】港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						label: '好吃不上火好吃不上火好吃不上火好吃不上火',
						group_num: '5人团',
						had_buy_num: 9,
						price: 129.00,
						label_price: 139.99
					}
				]
			}
		},
		comments:{
			groupBuy
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.content {
		width: 95vw;
		height: 100%;
		margin: 0 2.5vw;
	}
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
	.search {
		width: 95vw;
		margin: 10rpx 0;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
		height: 60rpx;
		background-color: red;
		text-align: center;
	}
	.banner {
		height: 350rpx;
		border-radius: 20rpx;
		swiper-item {
			border-radius: 20rpx;
			background-color: #007AFF;
		}
	}
	.kill {
		margin-top: 40rpx;
		.kill-title {
			display: flex;
			justify-content: space-between;
			.kill-title-left {
				border-left: solid #fc1316 10rpx;
				padding-left: 10rpx;
				font-size: 36rpx;
			}
			.kill-title-right {
				font-size: 28rpx;
			}
		}
		.kill-scroll {
			height: 380rpx;
			// background-color: #4CD964;
			.sku-box {
				display: inline-block;
				width: 220rpx;
				// height: 300rpx;
				text-align: center;
				margin: 40rpx 20rpx 0 20rpx;
				// background-color: #999999;
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
	
	// .group-box {
	// 	display: flex;
	// 	width: 100%;
	// 	height: 240rpx;
	// 	margin-top: 20rpx;
	// 	padding: 20rpx 0;
	// 	border-bottom: solid 2rpx #b0b4b4;
	// 	.group-box-left {
	// 		margin: 0 20rpx;
	// 		width: 240rpx;
	// 		height: 240rpx;
	// 		.img {
	// 			width: 240rpx;
	// 			height: 240rpx;
	// 		}
	// 	}
	// 	.group-box-right {
	// 		width: 420rpx;
	// 		display: flex;
	// 		flex-direction: column;
			
	// 		.text-box {
	// 			display: flex;
	// 			flex-direction: column;
	// 			.group-title {
	// 				font-size: 34rpx;
	// 				height: 40rpx;
	// 				line-height: 40rpx;
	// 				color: #000000;
	// 				overflow: hidden;
	// 				text-overflow: ellipsis;
	// 				white-space: nowrap;
	// 			}
	// 			.group-label {
	// 				font-size: 28rpx;
	// 				height: 50rpx;
	// 				line-height: 50rpx;
	// 				color: #808080;
	// 				overflow: hidden;
	// 				text-overflow: ellipsis;
	// 				white-space: nowrap;
					
	// 			}
	// 			.group-num {
	// 				width: 60rpx;
	// 				padding: 0 10rpx;
	// 				border: solid 2px red;
	// 				font-size: 22rpx;
	// 				color: red;
	// 			}
	// 		}
	// 		.price-box {
	// 			width: 420rpx;
	// 			display: flex;
	// 			flex-direction: row;
	// 			justify-content: space-between;
				
	// 			.price {
	// 				font-size: 50rpx;
	// 				line-height: 60rpx;
	// 				color: red;
	// 			}
	// 			.label-price {
	// 				width: 150rpx;
	// 				position: relative;
	// 				color: #808080;
	// 				text-decoration: line-through;
	// 				text {
	// 					position: absolute;
	// 					left: 10rpx;
	// 					bottom: 0;
	// 				}
	// 			}
	// 			.btn {
	// 				height: 60rpx;
	// 				line-height: 60rpx;
	// 				font-size: 26rpx;
	// 				color: #FFFFFF;
	// 				background-color: red;
	// 				border-radius: 40rpx;
	// 			}
	// 		}
			
	// 	}
	// }
	
	.share-btn {
		position: fixed;
		display: flex;
		flex-direction: column;
		// justify-content: space-around;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		float: right;
		right: 2.5vw;
		background-color: #6e6e6e;
		opacity:0.8;
		filter:alpha(opacity=80); /* 针对 IE8 以及更早的版本 */
		image {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
		}
		text {
			font-size: 24rpx;
			line-height: 24rpx;
			color: #FFFFFF;
		}
	}
</style>
