<template>
  <view class="article-community-detail">
    <view class="article-title">
      常见的继电器及工作原理，用最通俗的话说最专业的事！
    </view>
    <view class="article-box" v-html="article.content"></view>
    <view class="comment ng-flex ng-flex-space ng-align-center">
      <view class="num ng-flex">
        <image src="/static/imgs/comment/zhuanfa.png" mode="scaleToFill" />
        <text>13</text>
      </view>
      <view class="num ng-flex">
        <image src="/static/imgs/comment/comment.png" mode="scaleToFill" />
        <text>13</text>
      </view>
      <view class="num ng-flex">
        <image src="/static/imgs/comment/zan.png" mode="scaleToFill" />
        <text>13</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      article: {
        content:
          "继电器是一种根据电压、电流、温度、速度或时间等物理量的变化来接通或切断电路的电器。继电器的主要功能是保护和控制，所以继电器虽然种类很多，但通常可分为保护继电器和控制继电器两大类。常见的继电器有热继电器、电磁式继电器、时间继电器、温度继电器和速度继电器等。",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.article-community-detail {
  width: 100%;
  padding: 42rpx 40rpx;
  background: white;
  margin-bottom: 10rpx;
  .article-title {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 52rpx;
    text-indent: 24rpx;
    margin-bottom: 10rpx;
  }
  .article-box {
    padding: 0 10rpx 40rpx 10rpx;
    border-bottom: solid 2rpx $themeLineColor;
  }
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
  }
}
</style>
