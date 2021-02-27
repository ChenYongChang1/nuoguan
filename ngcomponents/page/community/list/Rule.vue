<template>
  <view class="inner-mask">
    <view class="rule-title ng-text-center">社区规则</view>
    <view class="rule">
      <view
        >所谓规则，是对应于社会动物而言，为协调个体、自然、社会之间，对内或对外的各类关系，以维护共同利益而形成的基本约定。</view
      >
      <view
        >规则是指规定出来供大家共同遵守的制度或章程。不成文规定，而更多的时候，规则是得到每个社会公民承认和遵守而存在的。行为规则要有助于一种秩序的型构，必须满足下述两个条件：</view
      >
      <view>第一，个人遵守这些规则；</view>
      <view
        >第二，个人运用这些规则去实现他们自己的目的，而这些个人的目的在很大程度上则是那些确立这些规则或有权修正这些规则的人所不知道的。</view
      >
    </view>
    <view class="close" @tap="$emit('close')">
      <image src="/static/imgs/comment/close.png" mode="scaleToFill" />
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inner-mask {
  width: 640rpx;
  height: 800rpx;
  background: #ffffff;
  border-radius: 16rpx;
  .rule-title {
    margin-top: 48rpx;
    width: 100%;
    height: 46rpx;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 46rpx;
    border-bottom: solid 2rpx $themeLineColor;
  }
  .rule {
    width: 520rpx;
    height: 544rpx;
    font-size: 13px;
    font-weight: 400;
    color: #444444;
    line-height: 40rpx;
    margin: 30rpx auto;
    > view {
      margin-bottom: 10rpx;
    }
  }
  .close {
    width: 60rpx;
    height: 60rpx;
    margin: auto;
  }
}
</style>
