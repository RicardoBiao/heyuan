<template>
	<view class="content">
		
		<leader-box :leader="leader"></leader-box>
		
		<input class="search" type="text" confirm-type="search" @confirm="searchKeyWord()" value="" placeholder="搜索商品"/>
		
		<swiper 
		class="banner"
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		>
			<swiper-item v-for="item in bannerList">
				<!-- <view class="swiper-item"> -->
					<image :src="item" mode="scaleToFill"></image>
				<!-- </view> -->
			</swiper-item>
		</swiper>
		
		<seckill :seckillDetail="seckillDetail" :seckillList="seckillList"></seckill>
		
		<view style="width: 100%; height: 20rpx;"></view>
		
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
	import leaderBox from '@/components/leader-box/leader-box.vue';
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
			seckill,
			leaderBox
		},
		onLoad() {

		},
		methods: {
			searchKeyWord() {
				
			},
		},
		
	}
</script>

<style lang="less">
	.content {
		width: 95vw;
		height: 100%;
		margin: 0 2.5vw;
	}
	.search {
		width: 95vw;
		margin: 10rpx 0;
		border-radius: 40rpx;
		height: 60rpx;
		background-color: #bdc1c1;
		text-align: center;
	}
	.banner {
		height: 350rpx;
		border-radius: 20rpx;
		swiper-item {
			border-radius: 20rpx;
			background-color: #007AFF;
			image {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
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
