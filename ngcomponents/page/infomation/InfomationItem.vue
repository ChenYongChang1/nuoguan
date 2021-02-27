<template>
  <navigator :url="articleUrl">
    <view class="community-row">
      <view class="community-title ng-flex ng-flex-space ng-align-start">
        <view class="title">{{ article.title }}</view>
      </view>
      <view class="community-desc ng-flex ng-flex-space">
        <view class="desc-img">
          <image :src="article.cover_img" mode="scaleToFill" />
        </view>
      </view>
      <view class="comment ng-flex ng-flex-start ng-align-center" @tap.stop="">
        <view class="like font-12 time ng-flex ng-align-center">
          <view class="tag">置顶</view>
        </view>
        <view class="like font-12 time ng-flex ng-align-center">
          {{ filterName }}
        </view>
        <view class="like font-12 ng-flex ng-align-center" @tap="likeArticle()">
          <image
            :src="
              $strJoin(
                `/static/imgs/community/`,
                `${article.isLike ? 'like-active' : 'like'}.svg`
              )
            "
            mode="scaleToFill"
          />
          19
        </view>
        <view class="like font-12 time ng-flex ng-align-center">
          {{ article.created_at }}
          <!-- {{ $formatLocalTime(article.created_at) }} -->
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
  padding: 40rpx 24rpx;
  border-bottom: solid 1px $lineColor;
  box-sizing: border-box;
  .community-title {
    width: 100%;
    margin-bottom: 30rpx;
    .title {
      width: 100%;
      color: black;
    }
  }
  .community-desc {
    width: 100%;
    .desc {
      width: calc(100% - 280rpx);
      color: $secondFontColor;
    }
    .desc-img {
      width: 100%;
      height: 280rpx;
      border-radius: 8rpx;
      overflow: hidden;
    }
  }
  .comment {
    width: 100%;
    height: 40rpx;
    margin-top: 24rpx;
    .like {
      margin-right: 40rpx;
      color: $descFontColor;
      .tag {
        padding: 4rpx 10rpx;
        border-radius: 4rpx;
        border: solid 1px $warningColor;
        color: $warningColor;
      }
      > image {
        width: 30rpx;
        height: 30rpx;
        margin-right: 14rpx;
      }
    }
  }
}
</style>
