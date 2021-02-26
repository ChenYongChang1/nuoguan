<template>
  <navigator :url="articleUrl">
    <view class="community-row">
      <view class="community-title ng-flex ng-flex-space ng-align-start">
        <view class="title">{{ article.title }}</view>
        <view class="tag font-12">电工</view>
      </view>
      <view class="community-desc ng-flex ng-flex-space">
        <view class="desc">{{ article.desc }}</view>
        <view class="desc-img">
          <image :src="article.descImg" mode="scaleToFill" />
        </view>
      </view>
      <view class="comment ng-flex ng-flex-start ng-align-center" @tap.stop="">
        <view class="like ng-flex ng-align-center" @tap="likeArticle()">
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
        <view class="like comment-num ng-flex ng-align-center">
          <image src="/static/imgs/community/comment.svg" mode="scaleToFill" />
          19
        </view>
        <view class="like time ng-flex ng-align-center">
          {{ $formatLocalTime(article.timestemp) }}
        </view>
      </view>
    </view>
  </navigator>
</template>

<script>
export default {
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
  padding: 40rpx 24rpx;
  border-bottom: solid 1px $lineColor;
  box-sizing: border-box;
  .community-title {
    width: 100%;
    margin-bottom: 30rpx;
    .title {
      width: calc(100% - 180rpx);
      color: black;
    }
    .tag {
      padding: 6rpx 12rpx;
      line-height: 28rpx;
      border: solid 1px $themeColor;
      color: $themeColor;
      border-radius: 8rpx;
    }
  }
  .community-desc {
    width: 100%;
    .desc {
      width: calc(100% - 280rpx);
      color: $secondFontColor;
    }
    .desc-img {
      width: 260rpx;
      height: 180rpx;
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
      > image {
        width: 30rpx;
        height: 30rpx;
        margin-right: 14rpx;
      }
    }
  }
}
</style>
