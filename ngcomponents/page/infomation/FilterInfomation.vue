<template>
  <view class="com-filter ng-flex ng-flex-space">
    <image
      class="bg-image"
      :src="`https://cyc-save.oss-cn-shanghai.aliyuncs.com/nuoguan/${bgImg}`"
      mode="scaleToFill"
    />
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
        @change="changeWord"
        @keydown.enter="changeWord({ target: { value: filterData.word } })"
        placeholder-class="input-placeholder"
      />
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    filterType: {
      type: String,
      default: "word",
    },
    bgImg: {
      type: String,
      default: "info-banner.png",
    },
  },
  data() {
    return {
      timer: "",
      filterData: {
        word: "",
      },
    };
  },
  methods: {
    changeWord(e) {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$emit("toggle", { type: this.filterType, value: e.target.value });
      }, 100);
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
.com-filter {
  width: 100%;
  height: 200rpx;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
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
