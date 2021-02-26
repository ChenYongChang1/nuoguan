<template>
	<view>
		<view class="comments-item" v-for="(item,index) in commentsList" :key="$strJoin('comments-', index)">
			<view class="comments-user ng-flex ng-flex-space ng-align-center">
				<view class="comments-user-left ng-align-center ng-flex">
					<image :src="item.avatar" mode="widthFix"></image>
					<text class="font-12 comments-username weight-550">{{ item.name }}</text>
					<text class="comments-time font-10">{{ item.time }}</text>
				</view>
				<view class="comments-user-right ng-align-center ng-flex">
					<view class="praise ng-align-center ng-flex">
						<image src="../../../static/imgs/community/parise.png" mode="widthFix"></image>
						<text class="margin-l-6">{{ item.pariseNum }}</text>
					</view>
					<view class="comments ng-align-center ng-flex margin-l-8">
						<image src="../../../static/imgs/community/comments.png" mode="widthFix"></image>
						<text class="margin-l-6 margin-r-10">{{ item.commentsNum }}</text>
					</view>
				</view>
			</view>
			<view class="comments-content margin-t-6 font-12">{{ item.content }}</view>
		</view>
	</view>
</template>

<script>
	export default {
	  data() {
	    return {
	      commentsList: [
			  {
				  avatar: '/static/imgs/1@2x.png',
				  name: '王建(外贸床上用品)',
				  time: '14小时前',
				  pariseNum: 8,
				  commentsNum: 6,
				  content: '评论这里是评论这里是评论这里是评论这里是评论',
				  response: [
					  {
						  re_avatar: '/static/imgs/1@2x.png',
						  re_name: '哈哈',
						  re_time: '2021-02-01 08:13:18',
						  re_content: '111111111111'
					  }
				  ]
			  },
			  {
				  avatar: '/static/imgs/1@2x.png',
				  name: '王建',
				  time: '4小时前',
				  pariseNum: 2,
				  commentsNum: 3,
				  content: '这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论',
				  response: [
					  {
						  re_avatar: '/static/imgs/1@2x.png',
						  re_name: '哈哈',
						  re_time: '2021-02-01 08:13:18',
						  re_content: '111111111111'
					  }
				  ]
			  },
			  {
				  avatar: '/static/imgs/1@2x.png',
				  name: '陈永昌',
				  time: '2020-12-05',
				  pariseNum: 0,
				  commentsNum: 0,
				  content: '111111111这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论这里是评论',
				  response: [
					  {
						  re_avatar: '/static/imgs/1@2x.png',
						  re_name: '哈哈',
						  re_time: '2021-02-01 08:13:18',
						  re_content: '111111111111'
					  }
				  ]
			  },
		  ]
	    };
	  },
	  methods: {
	    
	  },
	};
</script>

<style lang="scss" scoped>
	.comments-item {
		padding: 20rpx 0 40rpx 0;
		box-sizing: border-box;
		border-bottom: 1rpx solid $descFontColor;
	}
	.comments-user {
		color: #999999;
		font-size: 12rpx;
		.comments-user-left {
			image {
				width: 50rpx;
				height: 50rpx;
			}
			.comments-username {
				margin-left: 10rpx;
				color: $baseFontColor;
			}
			.comments-time {
				margin-left: 10rpx;
			}
		}
		.comments-user-right {
			.praise,.comments {
				image {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
	.comments-content {
		width: 100%;
		padding-left: 56rpx;
		letter-spacing: 1.5rpx;
		box-sizing: border-box;
		word-break: break-all;
	}
</style>
