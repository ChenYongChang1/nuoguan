<template>
  <navigator :url="articleUrl">
    <view class="community-row box-shadow">
      <view v-if="!userId" class="community-user ng-flex">
        <view class="user-cover">
          <image
            src="https://www.w3school.com.cn/i/eg_tulip.jpg"
            mode="scaleToFill"
          />
        </view>
        <view class="name-mech">
          <view class="name">sweet</view>
          <view class="positions">高级技工</view>
        </view>
        <view class="time">2020-12-23</view>
      </view>
      <view class="community-title ellipsis-row-2">
        教你如何用万用表判断电线电缆的断点教你如何用万用表判断电线电缆的断点教你如何用万用表判断电线电缆的断点
      </view>
      <view class="community-desc">
        <view class="image">
          <image
            src="https://www.w3school.com.cn/i/eg_tulip.jpg"
            mode="scaleToFill"
          />
        </view>
        <view class="text ellipsis-row-3">
          对于电路部分，有的时候工程宝也是无能为力，为啥？供电电路不知道哪一截断了。其实在施工过程中，对于供电部分，我们一般都是先用…
        </view>
      </view>
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
  </navigator>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      article: {
        id: 11,
        title: "你好啊这是一级标题你好啊",
        desc:
          "你好啊这是一级标题你好啊这是一级标题你好啊这是一级标题你好啊这是一级标题你好啊这是一级标题你好啊这是一级标题",
        timestemp: "1614339213000",
        descImg: "/static/imgs/banner@2x.png",
        isLike: false,
      },
    };
  },
  computed: {
    articleUrl() {
      return `/pages/community/commentsInfo?id=${this.article.id}`;
    },
  },
  methods: {
    likeArticle() {
      this.article.isLike = !this.article.isLike;
    },
  },
};
</script>

<style lang="scss" scoped>
.community-row {
  width: 100%;
  padding: 32rpx 34rpx 0 34rpx;
  border-radius: 8rpx;
  border-bottom: solid 1px $lineColor;
  box-sizing: border-box;
  background: white;
  margin-bottom: 18rpx;
  .community-user {
    width: 100%;
    height: 88rpx;
    margin-bottom: 24rpx;
    .user-cover {
      width: 88rpx;
      height: 88rpx;
      border-radius: 50%;
      margin-right: 29rpx;
      > image {
        border-radius: 50%;
      }
    }
    .name-mech {
      width: 390rpx;
      .name {
        width: 100%;
        height: 42rpx;
        font-size: 15px;
        font-weight: 400;
        color: #000000;
        line-height: 42rpx;
        margin-bottom: 8rpx;
      }
      .positions {
        width: 100%;
        height: 32rpx;
        font-size: 22rpx;
        font-weight: 400;
        color: $themeColor;
        line-height: 32rpx;
      }
    }
    .time {
      height: 32rpx;
      font-size: 22rpx;
      font-weight: 400;
      color: #666666;
      line-height: 32rpx;
      margin-top: 10rpx;
    }
  }
  .community-title {
    width: 100%;
    height: 42rpx;
    font-size: 15px;
    font-weight: 400;
    color: #000000;
    line-height: 42rpx;
    margin-bottom: 24rpx;
  }
  .community-desc {
    width: 100%;
    border-bottom: solid 2rpx $themeLineColor;
    .image {
      width: 400rpx;
      height: 240rpx;
      margin-bottom: 24rpx;
      image {
        border-radius: 8rpx;
      }
    }
    .text {
      width: 100%;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #555555;
      line-height: 42rpx;
      margin-bottom: 24rpx;
    }
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
  //   .community-title {
  //     width: 100%;
  //     margin-bottom: 30rpx;
  //     .title {
  //       width: calc(100% - 180rpx);
  //       color: black;
  //     }
  //     .tag {
  //       padding: 6rpx 12rpx;
  //       line-height: 28rpx;
  //       border: solid 1px $themeColor;
  //       color: $themeColor;
  //       border-radius: 8rpx;
  //     }
  //   }
  //   .community-desc {
  //     width: 100%;
  //     .desc {
  //       width: calc(100% - 280rpx);
  //       color: $secondFontColor;
  //     }
  //     .desc-img {
  //       width: 260rpx;
  //       height: 180rpx;
  //       border-radius: 8rpx;
  //       overflow: hidden;
  //     }
  //   }
  //   .comment {
  //     width: 100%;
  //     height: 40rpx;
  //     margin-top: 24rpx;
  //     .like {
  //       margin-right: 40rpx;
  //       > image {
  //         width: 30rpx;
  //         height: 30rpx;
  //         margin-right: 14rpx;
  //       }
  //     }
  //   }
}
</style>
