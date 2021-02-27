<template>
  <navigator :url="articleUrl">
    <view class="community-row">
      <view class="infomation-cover">
        <image :src="article.cover_img" mode="scaleToFill" />
      </view>
      <view class="infomation-box">
        <view class="infomation-box-title ellipsis-row-1">
          {{ article.title }}
        </view>
        <view
          class="comment ng-flex ng-flex-space ng-align-center"
          @tap.stop=""
        >
          <view class="ng-flex">
            <view class="like font-12 time ng-flex ng-align-center">
              <view class="tag font-10">置顶</view>
            </view>
            <view class="like font-12 time ng-flex ng-align-center">
              {{ article.created_at }}
            </view>
          </view>

          <view class="like font-12 ng-flex ng-align-center">
            <image src="/static/imgs/infomation/zan.png" mode="scaleToFill" />
            0
          </view>
        </view>
      </view>
    </view>
  </navigator>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
    filterName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    articleUrl() {
      return `/pages/infomation/infoDetail?id=${this.article.id}`;
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
  background: white;
  border-radius: 8rpx;
  // padding: 40rpx 24rpx;
  border-bottom: solid 1px $lineColor;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  .infomation-cover {
    width: 100%;
    height: 280rpx;
    border-radius: 8rpx 8rpx 0 0;
    overflow: hidden;
  }
  .infomation-box {
    width: 100%;
    padding: 20rpx 32rpx;
    .infomation-box-title {
      width: 100%;
      height: 42rpx;
      font-size: 15px;
      font-weight: 400;
      color: #000000;
      line-height: 42rpx;
      margin-bottom: 16rpx;
    }
  }
  .comment {
    width: 100%;
    height: 40rpx;
    margin-top: 24rpx;
    .like {
      margin-right: 21rpx;
      color: $descFontColor;
      .tag {
        padding: 0 4rpx;
        height: 32rpx;
        line-height: 28rpx;
        border-radius: 4rpx;
        border: solid 1px $themeColor;
        color: $themeColor;
      }
      > image {
        width: 30rpx;
        height: 30rpx;
        margin-right: 8rpx;
      }
    }
  }
}
</style>
