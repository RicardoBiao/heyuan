<template>
	<view>
		<navigator v-for="(item,index) in groupData" :key="index" class="group-box" :class="{hide : index > 1}" hover-class="none" open-type="switchTab" url="/pages/tabBar/classify/classify">
			<view class="group-box-left">
				<image class="img" src="../../static/logo.png" mode=""></image>
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
		</navigator>
		<view class="look-All">
			查看全部>
		</view>
	</view>
</template>

<script>
	export default {
		
		name:'groupBuy',
		props:{
			groupData: {
				type: Array,
				default: function () {
					return [];
				}
			}
		},
		data() {
			return {
				
			};
		},
		onLoad() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
	
	.group-box {
		display: flex;
		width: 100%;
		height: 240rpx;
		margin-top: 20rpx;
		padding: 20rpx 0;
		border-bottom: solid 2rpx #b0b4b4;
		&.hide {
			display: none;
		}
		.group-box-left {
			margin: 0 20rpx;
			width: 240rpx;
			height: 240rpx;
			.img {
				width: 240rpx;
				height: 240rpx;
			}
		}
		.group-box-right {
			width: 420rpx;
			display: flex;
			flex-direction: column;
			
			.text-box {
				display: flex;
				flex-direction: column;
				.group-title {
					font-size: 34rpx;
					height: 40rpx;
					line-height: 40rpx;
					color: #000000;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.group-label {
					font-size: 28rpx;
					height: 50rpx;
					line-height: 50rpx;
					color: #808080;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					
				}
				.group-num {
					width: 60rpx;
					padding: 0 10rpx;
					border: solid 2px red;
					font-size: 22rpx;
					color: red;
				}
			}
			.price-box {
				width: 420rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				
				.price {
					font-size: 50rpx;
					line-height: 60rpx;
					color: red;
				}
				.label-price {
					width: 150rpx;
					position: relative;
					color: #808080;
					text {
						position: absolute;
						left: 10rpx;
						bottom: 0;
						text-decoration: line-through;
					}
				}
				.btn {
					height: 60rpx;
					line-height: 60rpx;
					font-size: 26rpx;
					color: #FFFFFF;
					background-color: red;
					border-radius: 40rpx;
				}
			}
			
		}
	}
	.look-All {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}

</style>
