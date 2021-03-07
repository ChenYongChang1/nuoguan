<template>
  <view class="pdf-detail">
    <view class="pdf-title">工具介绍</view>
    <view class="pdf-img">
      <image src="/static/imgs/infomation/pdf.png" mode="scaleToFill" />
    </view>
    <view class="pdf-desc ng-text-center">
      <view class="title">{{ article.title }}</view>
      <!-- <view class="title">课时六 《正反转能耗制动与控制》</view> -->
      <view class="pdf-time">{{ article.created_at }}</view>
    </view>
    <view class="pdf-download ng-text-center">
      <view class="pdf-time">下载所需1积分</view>
      <view class="info-btn-down ng-text-center" @tap="openPdf">
        下载获取
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(options) {
    const { id } = options;
    this.getInfomation(id);
  },
  data() {
    return {
      id: "",
      article: {},
    };
  },
  methods: {
    openPdf() {
      this.$goPath("/pages/common/openPdf?links=" + this.article.file_path);
    },
    async getInfomation(id) {
      this.id = id;
      const res = await this.$store.dispatch("infomation/getInfomationDetail", {
        id,
      });
      this.article = res.detail;
    },
  },
};
</script>
<style lang="scss" scoped>
.pdf-detail {
  width: 100%;
  background: white;
  min-height: 100vh;
  padding: 48rpx 24rpx;
  .pdf-title {
    border-left: solid 4rpx $themeColor;
    padding-left: 20rpx;
    width: 100%;
    height: 42rpx;
    font-size: 15px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 42rpx;
    margin-bottom: 54rpx;
  }
  .pdf-img {
    width: 320rpx;
    height: 280rpx;
    margin: 84rpx auto 0 auto;
  }
  .pdf-desc {
    width: 100%;
    margin: 52rpx auto 0 auto;
    .title {
      width: 100%;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 62rpx;
    }
  }
  .pdf-time {
    width: 100%;
    height: 40rpx;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 40rpx;
    margin-top: 24rpx;
  }
  .pdf-download {
    margin-top: 248rpx;
    .info-btn-down {
      width: 440rpx;
      height: 72rpx;
      line-height: 72rpx;
      margin: 18rpx auto 0 auto;
      background: url("/static/imgs/infomation/btn.png");
      background-repeat: no-repeat;
      background-size: cover;
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>
