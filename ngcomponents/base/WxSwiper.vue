<template>
  <view class="banner-box ng-flex ng-flex-space">
    <swiper
      class="swiper"
      :style="{ height }"
      circular
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item
        v-for="(item, index) in swiperImgs"
        :key="$strJoin('swiper-', index)"
        :style="{ height }"
      >
        <view class="swiper-item" :style="{ height, 'line-height': height }">
          <image :src="item.src" mode="scaleToFill" />
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    // 高度
    height: {
      type: String,
      default: "400rpx",
    },
    swiperImgs: {
      type: Array,
      default: () => [
        {
          href: "",
          src: "/static/imgs/banner@2x.png",
        },
        {
          href: "",
          src: "/static/imgs/banner@2x.png",
        },
        {
          href: "",
          src: "/static/imgs/banner@2x.png",
        },
      ],
    },
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner-box {
  width: 100%;
  .swiper {
    width: 100%;
  }
  /deep/ .uni-swiper-dot {
    width: 16rpx;
    height: 4rpx;
    border-radius: 4rpx;
  }
  /deep/ .uni-swiper-dot-active {
    width: 32rpx;
    background: $themeColor;
  }
  .swiper-item {
    display: block;
    text-align: center;
  }
}
</style>
