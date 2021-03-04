<template>
  <view class="filter-box-tab">
    <view class="filter-tab ng-flex">
      <view
        class="btn-item ng-text-center font-14 weight-550"
        :class="{ active: item.id === defaultVal }"
        v-for="(item, index) in filterBtn"
        :key="index"
        @tap="toggle(item)"
      >
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    filterType: {
      type: String,
      default: "",
    },
    defaultVal: {
      type: Number,
      default: 0,
    },
    filterBtn: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    toggle(row) {
      this.$emit("toggle", { type: this.filterType, value: row.id });
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-box-tab {
  padding: 0 24rpx;
  box-sizing: border-box;
}
.filter-tab {
  width: 100%;
  height: 74rpx;
  margin: 16rpx 0 0 0;
  overflow-x: auto;
  border-bottom: solid 2rpx $themeLineColor;
  padding-left: 40rpx;
  .btn-item {
    height: 100%;
    line-height: 74rpx;
    margin-right: 60rpx;
    flex-shrink: 0;
    border-radius: 10rpx;
    color: $fontColor666;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 4rpx;
      border-radius: 3rpx;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      background: #000000;
      transition: width 0.3s ease;
    }
  }
  .btn-item:last-child {
    margin-right: 0;
  }
  .active {
    color: $baseFontColor;
    &:after {
      width: 60%;
    }
  }
}
</style>
