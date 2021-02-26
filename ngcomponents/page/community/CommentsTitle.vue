<template>
	<view>
		<view class="comments-info">
			<view class="comments-title-box ng-flex ng-align-center ng-flex-space font-12">
				<view class="comments-title-text font-13">价值两百元登峰大礼包来啦!</view>
				<view class="comments-title-prefess">电工</view>
			</view>
			<view class="prefession-box ng-flex ng-align-center ng-flex-space">
				<view class="prefession-left ng-flex ng-align-center font-12">
					<view class="prefession-left-img">
						<image src="../../../static/imgs/1@2x.png" mode="widthFix"></image>
					</view>
					<view class="prefession-left-name-box">
						<view class="prefession-left-name-title">德力助手</view>
						<view class="prefession-left-name-tip font-10">电工</view>
					</view>
				</view>
				<view class="prefession-right">
					<view class="collection-box ng-flex ng-align-center ng-flex-end" @click="$emit('collected')">
						<view class="collection-icon">
							<image :src="isCollect ? '/static/imgs/community/collection.png' : '/static/imgs/community/collected.png'" mode="widthFix"></image>
						</view>
						<view class="font-10 collection-text">收藏</view>
					</view>
					<view class="prefession-right-time font-8 ng-text-right">2021-02-24</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['isCollect'],
		data() {
			return {
				
			};
		},
		onLoad() {
			console.log(this.isCollect)
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 40rpx 20rpx 0;
	}
	.comments-title-prefess {
		color: $themeColor;
		border: 1rpx solid $themeColor;
		text-align: center;
		height: 40rpx;
		padding: 0 10rpx;
		border-radius: 8rpx;
		line-height: 40rpx;
		text-align: center;
		box-sizing: border-box;
	}
	.prefession-box {
		margin-top: 40rpx;
		.prefession-left-img {
			width: 80rpx;
			height: 80rpx;
		}
		.prefession-left-name-box {
			margin-left: 10rpx;
			.prefession-left-name-tip {
				color: $themeColor;
			}
		}	
	}
	.collection-icon {
		width: 40rpx;
		height: 40rpx;
		image {
			width: 40rpx;
			height: 40rpx;
		}
	}
	.prefession-right-time {
		color: #999999;
		margin-right: -20rpx;
	}
</style>
