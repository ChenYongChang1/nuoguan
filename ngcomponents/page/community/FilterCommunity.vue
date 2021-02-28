<template>
  <view class="com-filter ng-flex ng-flex-space">
    <view class="remain-rules ng-text-center" @tap="showModal = true">
      <image src="/static/imgs/comment/wenhao.png" mode="scaleToFill" />
      <text class="font-10">规则</text>
    </view>
    <view class="input-filter">
      <image
        class="big"
        src="/static/imgs/community/fangdajing.svg"
        mode="scaleToFill"
      />
      <input
        v-model="filterData.word"
        class="search-input font-13"
        placeholder="搜索你感兴趣的内容"
        placeholder-class="input-placeholder"
      />
    </view>
    <view
      v-if="showModal"
      class="mask ng-flex ng-flex-center ng-align-center"
      @tap="showModal = false"
      @touchmove.stop.prevent="clear"
    >
      <rule @close="showModal = false"></rule>
    </view>
  </view>
</template>

<script>
import uniPopup from "components/uni-popup/uni-popup";
import Rule from "ngcomponents/page/community/list/Rule";
export default {
  components: { uniPopup, Rule },
  data() {
    return {
      showModal: false,
      filterData: {
        word: "",
      },
    };
  },
  methods: {
    clear(e) {
      // TODO nvue 取消冒泡
      e.stopPropagation();
    },
    hanlderChange({ type, value }) {
      this.filterData[type] = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-image {
  width: 30rpx;
  height: 30rpx;
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: $maskColor;
  z-index: 9;
}
.com-filter {
  width: 100%;
  height: 200rpx;
  background: url("https://cyc-save.oss-cn-shanghai.aliyuncs.com/nuoguan/comment-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .remain-rules {
    position: absolute;
    right: 24rpx;
    top: 12rpx;
    width: 50rpx;
    height: 80rpx;
    line-height: 20rpx;
    > image {
      width: 40rpx;
      height: 40rpx;
      margin: auto;
    }
    > text {
      width: 100%;
      height: 22rpx;
      font-weight: 400;
      color: #ffffff;
    }
  }
  // padding: 5rpx 10rpx;
  .input-filter {
    position: relative;
    border-radius: 8rpx;
    width: 630rpx;
    height: 64rpx;
    margin: 92rpx auto 0 auto;
    border-radius: 32rpx;
    background: url("https://cyc-save.oss-cn-shanghai.aliyuncs.com/nuoguan/input.png");
    background-size: cover;
    background-repeat: no-repeat;
    .big {
      position: absolute;
      top: 50%;
      left: 24rpx;
      transform: translateY(-50%);
      width: 40rpx;
      height: 40rpx;
    }
    .search-input {
      display: block;
      width: 500rpx;
      height: 100%;
      // background: $moduleBg;
      padding: 0 10rpx 0 75rpx;
    }
  }
  .all-filter {
    width: 80rpx;
    height: 80rpx;
    line-height: 40rpx;
  }
  .filter-box {
    width: 500rpx;
    height: 100%;
  }
}
</style>
