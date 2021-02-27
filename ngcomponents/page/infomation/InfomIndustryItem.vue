<template>
  <navigator :url="articleUrl" :style="{ width: widthA }">
    <view v-if="type === 1" class="info-row">
      <view class="infomation-box">
        <view class="infomation-box-title ellipsis-row-1">
          {{ article.title }}
        </view>
      </view>
      <view class="infomation-cover">
        <image :src="article.cover_img" mode="scaleToFill" />
        <view class="mask">
          <image src="/static/imgs/infomation/play.png" mode="scaleToFill" />
        </view>
      </view>
      <view class="infomation-box">
        <view class="comment ng-flex ng-flex-space ng-align-center">
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
    <view v-if="type === 2" class="info-row-pdf">
      <view class="info-pdf-item">
        <image
          class="info-pdf-img"
          src="/static/imgs/infomation/pdf.png"
        ></image>
        <view class="pdf-desc">
          <view class="pdf-title ng-text-center"> 电工实用手册</view>
          <view class="time ng-text-center font-10">2020/13/43</view>
          <view class="jifen ng-text-center font-12">2积分</view>
        </view>
      </view>
    </view>
    <view v-if="type === 3" class="info-row-word">
      <view class="word-title ellipsis-row-1">
        {{ article.title }}
      </view>
      <view class="word-desc ellipsis-row-3">
        诺冠为石油、天然气和化工行业提供安全性、可靠性和耐用性等方面值得信赖的解决方案，以应对全球最极端的环境和工作条件，在此方面…
      </view>
      <view class="line"></view>
      <view class="infomation-box">
        <view class="comment ng-flex ng-flex-space ng-align-center">
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
    type: {
      type: Number,
      default: 1, // 1为视频  2 是文件 3是图文
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
    widthA() {
      return this.type === 2 ? "auto" : "100%";
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
.infomation-box {
  width: 100%;
  // padding: 20rpx 32rpx;
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
.info-row {
  width: 100%;
  background: white;
  border-radius: 8rpx;
  // padding: 40rpx 24rpx;
  border-bottom: solid 1px $lineColor;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 20rpx 32rpx;
  .infomation-cover {
    position: relative;
    width: 100%;
    height: 288rpx;
    // border-radius: 8rpx 8rpx 0 0;
    overflow: hidden;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $maskColor;
      border-radius: 8rpx;
      > image {
        width: 88rpx;
        height: 88rpx;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
.info-row-pdf {
  // padding: 40rpx 24rpx;
  box-sizing: border-box;
  border-radius: 8rpx;
  overflow: hidden;
  .info-pdf-item {
    width: 320rpx;
    background: white;
    .info-pdf-img {
      width: 320rpx;
      height: 280rpx;
    }
    .pdf-desc {
      width: 100%;
      padding: 16rpx 0;
      .pdf-title {
        width: 100%;
        height: 42rpx;
        font-size: 15px;
        font-weight: 400;
        color: #000000;
        line-height: 42rpx;
        margin-bottom: 6rpx;
      }
      .time {
        width: 100%;
        height: 28rpx;
        font-weight: 400;
        color: #333333;
        line-height: 28rpx;
        margin-bottom: 16rpx;
      }
      .jifen {
        width: 100%;
        height: 34rpx;
        font-weight: 400;
        color: $themeColor;
        line-height: 34rpx;
      }
    }
  }
}
.info-row-word {
  width: 100%;
  padding: 40rpx 38rpx;
  background: white;
  margin-bottom: 18rpx;
  border-radius: 8rpx;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .word-title {
    width: 100%;
    height: 42rpx;
    font-size: 15px;
    font-weight: 400;
    color: #000000;
    line-height: 42rpx;
    margin-bottom: 24rpx;
  }
  .word-desc {
    width: 100%;
    height: 126rpx;
    font-size: 13px;
    font-weight: 400;
    color: #555555;
    line-height: 42rpx;
    margin-bottom: 24rpx;
  }
  .line {
    width: 100%;
    height: 2rpx;
    background: $themeColor;
    opacity: 0.49;
  }
}
</style>
