<template>
  <view class="index-box">
    <view class="index-modules">
      <view class="index-banner">
        <wx-swiper></wx-swiper>
      </view>
      <view class="container-box">
        <index-container></index-container>
        <view class="line">
          <image src="/static/imgs/line.png" mode="scaleToFill" />
        </view>
        <index-play></index-play>
        <view class="height-30 line">
          <image src="/static/imgs/buy.png" mode="scaleToFill" />
          <!-- <view class="line-title ng-text-center"> 线上选购 </view> -->
        </view>
        <index-help></index-help>
      </view>
    </view>
    <tab-bar></tab-bar>
  </view>
</template>

<script>
// import IndexBanner from "ngcomponents/page/index/IndexBanner";
import IndexContainer from "ngcomponents/page/index/IndexContainer";
import IndexPlay from "ngcomponents/page/index/IndexPlay";
import IndexHelp from "ngcomponents/page/index/IndexHelp";
export default {
  components: {
    IndexContainer,
    IndexPlay,
    IndexHelp,
  },
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo || {};
    },
  },
  async onShow() {
    if (this.$isMpWeixin && !this.userInfo.openId) {
      this.$goPath("/pages/login/login");
      return;
    }
    this.$store.commit("SET_NOW_PAGE", "index");
  },
};
</script>

<style lang="scss" scoped>
.index-box {
  padding: 0 0 168rpx 0;
  background: rgb(240, 240, 240);
}
.index-modules {
  width: 100%;
  .index-banner {
    width: 100%;
    height: 400rpx;
    margin-bottom: 40rpx;
  }
  .container-box {
    width: 100%;
    padding: 0 24rpx;
    box-sizing: border-box;
  }
  .line {
    margin: 40rpx 0;
    width: 100%;
    height: 2rpx;
    // background: $themeColor;
    position: relative;
  }
  .line-title {
    position: absolute;
    width: 320rpx;
    height: 60rpx;
    font-size: 36rpx;
    color: white;
    left: 50%;
    top: 0;
    background: $themeColor;
    transform: translateX(-50%);
  }
  .height-30 {
    height: 60rpx;
  }
}
</style>
