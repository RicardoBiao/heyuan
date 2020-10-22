<template>
	<view class="content">
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
		
		<input class="search" type="text" value="" placeholder="搜索商品"/>
		
		<swiper 
		class="banner"
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		>
			<swiper-item v-for="item in bannerList">
				<!-- <view class="swiper-item"> -->
					<image :src="item" mode=""></image>
				<!-- </view> -->
			</swiper-item>
		</swiper>
		
		<seckill :seckillDetail="seckillDetail" :seckillList="seckillList"></seckill>
		<group-buy :groupData="groupData"></group-buy>
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
	import seckill from '@/components/seckill/seckill.vue';
	export default {
		data() {
			return {
				leader: {
					leaderAddress: '佛山_保利心语花园',
					addressDetail: '广东省佛山市南海区桂城街道保利西雅图三期',
					leaderName: '卢毅',
					leaderImg: ''
				},
				bannerList: [
					'https://ruiyinqing.oss-cn-shenzhen.aliyuncs.com/upload/015c0ba6812ed7b846f130dd3d2bf1b7.png',
					'https://ruiyinqing.oss-cn-shenzhen.aliyuncs.com/upload/015c0ba6812ed7b846f130dd3d2bf1b7.png',
					'https://ruiyinqing.oss-cn-shenzhen.aliyuncs.com/upload/015c0ba6812ed7b846f130dd3d2bf1b7.png',
					'https://ruiyinqing.oss-cn-shenzhen.aliyuncs.com/upload/015c0ba6812ed7b846f130dd3d2bf1b7.png',
					'https://ruiyinqing.oss-cn-shenzhen.aliyuncs.com/upload/015c0ba6812ed7b846f130dd3d2bf1b7.png'
				],
				seckillDetail: {
					seckillDay: '20',
					seckillDate: '05:25:17'
				},
				seckillList: [
					{
						img_url: '',
						sku_name: '港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						price: 139.00
					},
					{
						img_url: '',
						sku_name: '港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						price: 139.00
					},
					{
						img_url: '',
						sku_name: '港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						price: 139.00
					},
					{
						img_url: '',
						sku_name: '港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						price: 139.00
					},
					{
						img_url: '',
						sku_name: '港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						price: 139.00
					},
					{
						img_url: '',
						sku_name: '港荣蒸蛋糕港荣蒸蛋糕港荣蒸蛋糕',
						price: 139.00
					}
				],
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
		components:{
			groupBuy,
			seckill
		},
		onLoad() {

		},
		methods: {

		},
		
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
