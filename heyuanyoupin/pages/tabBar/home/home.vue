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
		
		<!-- 秒杀活动 -->
		<seckill :seckillDetail="seckillDetail" :seckillList="seckillList"></seckill>
		
		<view style="width: 100%; height: 20rpx;"></view>
		
		<!-- 拼团活动 -->
		<group-buy :groupData="groupData"></group-buy>
		
		<!-- 正在抢购 -->
		<view class="panic-buying-box">
			<image class="top-img" src="../../../static/logo.png" mode=""></image>
			<view class="btn-box">
				<view style="transform-origin: bottom left; margin-left: 20rpx;" class="btn">
					正在抢购
				</view>
				<view style="transform-origin: bottom right; margin-left: 30rpx;" class="btn">
					即将开抢
				</view>
			</view>
			<view class="btn-bottom-line"></view>
			
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" 
				:class="index == TabCur ? 'text-reds cur' : ''" 
				v-for="(item, index) in classlist" 
				:key="index" 
				@tap="tabSelect" 
				:data-id="index"
				>				
					<text :class="index == TabCur ? 'class_text' : 'class_text_on'">{{ item.title }}</text>
				</view>
			</scroll-view>
			
			<view class="commodity">
				<scroll-view :class="[isTop ? 'commodity-top-fixed' : 'commodity-top']" scroll-x="true">
					<view class="commodity-class" v-for="(item, index) in data.catalog_list" :key="index" @tap="select(item.id)">
						<text :class="[id === item.id ? 'active' : '']">{{ item.title }}</text>
					</view>
				</scroll-view>
				<view class="commodity-content">
					<view 
					class="commodity-item" 
					v-for="(item, index) in commodityList" 
					:key="index" 
					@tap="goPage('/pages/product/detail/detail?sku_id=' + item.sku_id)"
					>
						<image class="item-img" :src="item.image_url"></image>
						<view class="info">
							<view class="discount" v-if="item.is_score_to_money > 0">最高可抵{{ item.cash_interval_max }}元</view>
							<view class="discount" v-if="item.promotion_title.length > 0">{{ item.promotion_title[0] }}</view>
						</view>
						<text class="item-brand">{{ item.brand_name }}</text>
						<text class="item-name">{{ item.title }}</text>
						<view class="item-price">
							<text class="item-nprice">￥{{ item.price }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<nav>
			<a href="#">Home</a>
			<a href="#" class="selected">Projects</a>
			<a href="#">About</a>
		</nav>
		<main>
			Content area
		</main>
		
		<nav class="left">
			<a href="#">Home</a>
			<a href="#" class="selected">Projects</a>
			<a href="#">About</a>
		</nav>
		<main>
			Content area
		</main>
		
		<nav class="right">
			<a href="#">Home</a>
			<a href="#" class="selected">Projects</a>
			<a href="#">About</a>
		</nav>
		<main>
			Content area
		</main>
		
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
	
	.panic-buying-box {
		.top-img {
			width: 100%;
			height: 100rpx;
		}
		.btn-box {
			width: 100%;
			.btn {
				width: 140rpx;
				display: inline-block;
				border-top-left-radius: 15rpx;
				border-top-right-radius: 15rpx;
				background-color: #fc4e48;
				padding: 20rpx;
				text-align: center;
				font-size: 28rpx;
				color: #FFFFFF;
				transform: scale(1.1, 1.3) perspective(.5em) rotateX(2deg);
				
			}
		}
		.btn-bottom-line {
			
		}
		
		.commodity {
				width: 750rpx;
				overflow: hidden;
				::-webkit-scrollbar {
					width: 0;
					height: 0;
					color: transparent;
				}
				.commodity-top {
					height: 60rpx;
					padding: 20rpx 0 20rpx 20rpx;
					z-index: 1;
					white-space: nowrap;
					width: 100%;
					background-color: #ffffff;
					margin-top: 20rpx;
				}
		
				.commodity-top-fixed {
					height: 60rpx;
					padding: 20rpx 0 20rpx 20rpx;
					background-color: #fff;
					position: fixed;
					top: 0;
					left: 0;
					z-index: 1;
					white-space: nowrap;
					width: 100%;
				}
		
				.commodity-class {
					display: inline-block;
					width: 100rpx;
					height: 60rpx;
					padding: 0 20rpx;
					text-align: center;
					font-family: PingFangSC-Regular;
		
					.active {
						// color: #B69162;
						color: #333333;
						// border-bottom: 2px solid #b69162;
						border-bottom: 2px solid #ff2c15;
						font-family: PingFangSC-Medium;
					}
				}
		
				.commodity-content {
					background-color: #fff;
					display: flex;
					flex-wrap: wrap;
		
					.commodity-item {
						flex: 1;
						box-sizing: border-box;
						width: 50%;
						// width: 360rpx;
						height: 572rpx;
						padding: 0 20rpx;
						border: 1px solid #f2f2f2;
						position: relative;
						.item-img {
							width: 262rpx;
							height: 262rpx;
							padding: 45rpx 35rpx 75rpx;
						}
		
						.info {
							display: flex;
							justify-content: space-between;
							flex-wrap: wrap;
							position: absolute;
							top: 345rpx;
							left: 24rpx;
							right: 24rpx;
		
							.discount {
								height: 36rpx;
								padding: 0 12rpx;
								text-align: left;
								font-size: 20rpx;
								line-height: 35rpx;
								// color: #b7261f;
									color: #fe4444;
								border-radius: 20rpx;
								border: 1rpx solid #b7261f;
								overflow: hidden;
								/*超出部分隐藏*/
								white-space: nowrap;
								/*不换行*/
								text-overflow: ellipsis;
								/*超出部分文字以...显示*/
								margin-bottom: 3rpx;
							}
						}
		
						.item-brand {
							display: block;
							font-size: 22rpx;
							color: #333333;
							line-height: 22rpx;
							margin: 15rpx 0 10rpx;
						}
		
						.item-name {
							display: block;
							// width: 300rpx;
							font-size: 22rpx;
							color: #333333;
							margin-bottom: 10rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							line-height: 1;
						}
		
						.item-price {
							display: flex;
							justify-content: space-between;
							line-height: 1;
							width: 360rpx;
		
							.item-nprice {
								color: #fe4444;
								// color: #B7251E;
								font-size: 24rpx;
							}
		
							.item-oprice {
								color: #999999;
								font-size: 22rpx;
								text-decoration: line-through;
								margin-right: 25rpx;
							}
						}
					}
				}
			}
	}
	
	
	nav {
		position: relative;
		z-index: 1;
		padding-left: 1em;
	}
	
	nav > a {
		position: relative;
		display: inline-block;
		padding: .3em 1em 0;
		color: inherit;
		text-decoration: none;
		margin: 0 -.3em;
	} 
	
	nav > a::before,
	main {
		border: .1em solid rgba(0,0,0,.4);
	}
	
	nav a::before {
		content: ''; /* To generate the box */
		position: absolute;
		top: 0; right: 0; bottom: 0; left: 0;
		z-index: -1;
		border-bottom: none;
		border-radius: .5em .5em 0 0;
		background: #ccc linear-gradient(hsla(0,0%,100%,.6), hsla(0,0%,100%,0));
		box-shadow: 0 .15em white inset;
		transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);
		transform-origin: bottom;
	}
	
	nav a.selected { z-index: 2;}
	
	nav a.selected::before {
		background-color: #eee;
		margin-bottom: -.08em;
	}
	
	main {
		display: block;
		margin-bottom: 1em;
		background: #eee;
		padding: 1em;
		border-radius: .15em;
	}
	
	nav.left > a::before {
		transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
		transform-origin: bottom left;
	}
	
	nav.right { padding-left: 2em; }
	
	nav.right > a::before {
		transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
		transform-origin: bottom right;
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
