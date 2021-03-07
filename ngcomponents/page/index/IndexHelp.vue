<template>
  <view class="help-box ng-flex ng-flex-space">
    <view
      class="help-item"
      v-for="(item, index) in list"
      :key="index"
    >
      <image
        @tap="$goWebViewPath(item.href)"
        :src="item.src"
        mode="scaleToFill"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          href: "https://www.norgren.com.cn/index.php/Home/Search/filter/",
          src: "/static/imgs/7@2x.png",
        },
        {
          href: "https://www.norgren.com.cn/",
          src: "/static/imgs/8@2x.png",
        },
        {
          href: "https://www.norgren.com.cn/index.php/Home/Search/filter/",
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
