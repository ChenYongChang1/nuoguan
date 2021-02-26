<template>
  <view class="add-modules">
    <view class="modules-title weight-550">{{ title }}</view>
    <view class="modules-content">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
.add-modules {
  width: 100%;
  padding-top: 10rpx;
  border-bottom: solid 1px $lineColor;
  .modules-title {
    height: 70rpx;
    font-size: 18px;
    border-bottom: solid 6rpx $themeColor;
    display: inline-block;
    margin-bottom: 30rpx;
  }
  .modules-content {
    width: 100%;
    padding-bottom: 20rpx;
  }
}
</style>
