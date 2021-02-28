<template>
  <view class="comment-acticle-centent">
    <view class="topic-title">社区互动</view>
    <view class="all-comment">
      <view v-for="(item, index) in list" :key="index" class="all-comment-item ng-flex">
        <view class="comm-user-cover">
          <image
            src="https://cyc-save.oss-cn-shanghai.aliyuncs.com/nuoguan/eg_tulip.jpg"
            mode="scaleToFill"
          />
        </view>
        <view class="comm-body">
          <view class="comm-user-message ng-flex ng-flex-space">
            <view class="user-message">
              <view class="user-name ellipsis-row-1 font-14">ajsdhad sad</view>
              <view class="user-time font-10">2020/12/12</view>
            </view>
            <view class="article-comment-num">
              <view class="comment ng-flex ng-align-center">
                <view class="num-comm num ng-flex">
                  <image
                    src="/static/imgs/comment/comment.png"
                    mode="scaleToFill"
                  />
                  <text>13</text>
                </view>
                <view class="num ng-flex">
                  <image
                    src="/static/imgs/comment/zan.png"
                    mode="scaleToFill"
                  />
                  <text>13</text>
                </view>
              </view>
            </view>
          </view>
          <view class="comment-content-body">
            近几年发展起来一种新型继电器-磁保持继电器。和其他电磁继电器一样，对电路起着自动接通和切断作用。所不同的是
          </view>
          <view class="first-response">
            <text>李嘉琪：</text>
            回复：近衔铁组件中的磁铁产生的力。所有的磁保持继电器中都有永磁，一般的电磁继电器则没有。
            <view class="show-all-comment">查看全部回复</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2],
    };
  },
};
</script>

<style lang="scss" scoped>
.comment-acticle-centent {
  width: 100%;
  background: white;
  padding: 30rpx 50rpx;
  .topic-title {
    margin-bottom: 54rpx;
  }
  .all-comment {
    width: 100%;
    .all-comment-item {
      width: 100%;
      margin-bottom: 40rpx;
      .comm-user-cover {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        margin-right: 16rpx;
        > image {
          border-radius: 50%;
        }
      }
      .comm-body {
        width: 570rpx;
        border-bottom: solid 2rpx rgba(119, 119, 119, 0.49);
        .comm-user-message {
          width: 100%;
          .user-message {
            width: 320rpx;
            .user-name {
              width: 100%;
              height: 40rpx;
              font-weight: 400;
              color: #000000;
              line-height: 40rpx;
            }
            .user-time {
              width: 100%;
              height: 28rpx;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #666666;
              line-height: 28rpx;
              margin-left: -26rpx;
            }
          }
          .article-comment-num {
            .comment {
              width: 100%;
              padding: 26rpx 20rpx;
              .num {
                > image {
                  width: 36rpx;
                  height: 36rpx;
                  margin-right: 12rpx;
                }
                > text {
                  height: 36rpx;
                  font-size: 12px;
                  font-weight: 400;
                  color: #666666;
                  line-height: 36rpx;
                }
              }
              .num-comm {
                margin-right: 34rpx;
              }
            }
          }
        }
        .comment-content-body {
          width: 100%;
          font-size: 12px;
          font-weight: 400;
          color: #333333;
          line-height: 40rpx;
          margin-bottom: 16rpx;
        }
        .first-response {
          width: 100%;
          background: $bodyBg;
          border-radius: 8rpx;
          font-size: 12px;
          color: #333333;
          padding: 24rpx;
          line-height: 40rpx;
          margin-bottom: 40rpx;
          text {
            font-weight: 500;
            color: #000000;
          }
          .show-all-comment {
            width: 100%;
            height: 34rpx;
            font-size: 24rpx;
            font-weight: 400;
            color: $themeColor;
            line-height: 34rpx;
            margin-top: 14rpx;
          }
        }
      }
    }
  }
}
</style>
