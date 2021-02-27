<template>
  <view class="knoledge-box ng-flex">
    <view class="knoledge">
      <navigator url="/pages/infomation/infomation">
        <image src="/static/imgs/1@2x.png" mode="scaleToFill" />
      </navigator>
    </view>
    <view class="goods-box">
      <view class="community">
        <navigator url="/pages/community/community">
          <image src="/static/imgs/2@2x.png" mode="scaleToFill" />
        </navigator>
      </view>
      <view class="community goods">
        <image src="/static/imgs/3@2x.png" mode="scaleToFill" />
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.knoledge {
  width: 308rpx;
  height: 280rpx;
  margin-right: 40rpx;
}
.goods-box {
  width: 354rpx;
  .community {
    width: 100%;
    height: 130rpx;
    margin-bottom: 20rpx;
  }
  .goods {
    margin-bottom: 0;
  }
}
</style>
