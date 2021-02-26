<template>
  <view class="help-box ng-flex ng-flex-space">
    <view
      class="help-item"
      v-for="(item, index) in list"
      :key="$strJoin('help-', index)"
    >
      <image :src="item.src" mode="scaleToFill" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          href: "",
          src: "/static/imgs/7@2x.png",
        },
        {
          href: "",
          src: "/static/imgs/8@2x.png",
        },
        {
          href: "",
          src: "/static/imgs/9@2x.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.help-box {
  width: 100%;

  .help-item {
    width: 220rpx;
    height: 148rpx;
  }
}
</style>
