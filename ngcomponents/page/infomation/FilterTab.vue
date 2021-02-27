<template>
  <view class="filter-tab ng-flex">
    <view
      class="btn-item ng-text-center font-14 weight-550"
      :class="{ active: item.value === defaultVal }"
      v-for="(item, index) in filterBtn"
      :key="index"
      @tap="toggle(item)"
    >
      <image
        v-if="defaultVal !== item.value"
        class="btn-icon"
        :src="item.src"
        mode="scaleToFill"
      />
      <image
        v-else-if="defaultVal === item.value"
        class="btn-icon"
        :src="item.activeSrc"
        mode="scaleToFill"
      />
      {{ item.name }}
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
      this.$emit("toggle", { type: this.filterType, value: row.value });
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-tab {
  width: 100%;
  height: 120rpx;
  margin: 8rpx 0;
  overflow-x: auto;
  padding: 0 10rpx;
  .btn-item {
    width: 220rpx;
    height: 100%;
    line-height: 50rpx;
    color: $baseFontColor;
    border: solid 1px $lineColor;
    margin-right: 20rpx;
    flex-shrink: 0;
    border-radius: 10rpx;
    padding-top: 10rpx;
    background: white;
    .btn-icon {
      width: 50rpx;
      height: 50rpx;
      margin: auto;
    }
  }
  .btn-item:last-child {
    border-right: none;
  }
  .active {
    background: $themeColor;
    color: white;
  }
}
</style>
