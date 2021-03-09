<template>
  <view class="detail">
    <article class="detail-article">
      <view class="title">{{ article.title }}</view>
      <view class="desc ng-flex">
        <view class="auth font-14"> 德力西电气 </view>
        <view class="time">{{ article.created_at }}</view>
      </view>
      <view class="content">
        <view v-html="content"></view>
      </view>
    </article>
    <view v-if="false" class="guanggao">
      <view class="gg-title"> 喜欢此内容的人还喜欢 </view>
      <view class="gg-row ng-flex ng-flex-space">
        <view class="title-gg">
          <view class="gg-title-text font-14">
            配电箱内断路器的接线方式，以及断路器1P、2P的含义解析!
          </view>
          <view class="gg-title-text auth-user font-14"> 电工之家 </view>
        </view>
        <view class="gg-img">
          <image src="/static/imgs/1@2x.png" mode="scaleToFill" />
        </view>
      </view>
      <view class="gg-row ng-flex ng-flex-space">
        <view class="title-gg">
          <view class="gg-title-text font-14">
            配电箱内断路器的接线方式，以及断路器1P、2P的含义解析!
          </view>
          <view class="gg-title-text auth-user font-14"> 电工之家 </view>
        </view>
        <view class="gg-img">
          <image src="/static/imgs/1@2x.png" mode="scaleToFill" />
        </view>
      </view>
      <view class="gg-row ng-flex ng-flex-space">
        <view class="title-gg">
          <view class="gg-title-text font-14">
            配电箱内断路器的接线方式，以及断路器1P、2P的含义解析!
          </view>
          <view class="gg-title-text auth-user font-14"> 电工之家 </view>
        </view>
        <view class="gg-img">
          <image src="/static/imgs/1@2x.png" mode="scaleToFill" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(options) {
    const { id } = options;
    this.id = id
    this.getInfomation();
  },
  data() {
    return {
      url: "",
      id: "",
      article: {},
    };
  },
  onShow() {},
  async onPullDownRefresh(){
    await this.getInfomation();
    uni.stopPullDownRefresh();
  },
  computed: {
    content() {
      return (this.article.content || '').replace(
        /<img/g,
        '<img style="max-width:100%;"'
      );
    },
  },
  methods: {
    async getInfomation() {
      const res = await this.$store.dispatch("infomation/getInfomationDetail", {
        id: this.id,
      });
      this.article = res.detail;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  background: $bodyBg;
  image {
    width: 100%;
  }
  .detail-article {
    width: 100%;
    background: white;
    padding: 32rpx 32rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
  }
  .guanggao {
    width: 100%;
    height: 740rpx;
    border-radius: 10rpx;
    padding: 20rpx 20rpx;
    background: white;
    margin: 0 auto 24rpx auto;
    .gg-title {
      width: 100%;
      height: 44rpx;
      font-size: 14px;
      margin-bottom: 20rpx;
      color: $descFontColor;
    }
    .gg-row {
      width: 100%;
      height: 160rpx;
      margin-bottom: 60rpx;
      .title-gg {
        width: 580rpx;
        border-bottom: solid 1px $lineColor;
        .gg-title-text {
          width: 100%;
          margin-bottom: 20rpx;
        }
        .auth-user {
          color: $descFontColor;
        }
      }
      .gg-img {
        width: 130rpx;
        height: 130rpx;
      }
    }
  }
  .title {
    width: 100%;
    height: 48rpx;
    font-size: 20px;
    margin-bottom: 30rpx;
  }
  .desc {
    width: 100%;
    margin-bottom: 30rpx;
    .auth {
      color: rgb(90, 107, 146);
      margin-right: 20rpx;
    }
    .time {
      color: $descFontColor;
    }
  }
  .content {
    width: 100%;
    margin-bottom: 20rpx;
    img {
      max-width: 100%;
    }
  }
}
</style>
