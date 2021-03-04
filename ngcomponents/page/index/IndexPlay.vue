<template>
  <view class="play-box ng-flex ng-flex-space">
    <navigator
      v-for="(item, index) in list"
      :key="$strJoin('play-', index)"
      :url="item.href"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <view class="play-item">
        <image :src="item.src" mode="scaleToFill"
      /></view>
    </navigator>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          href: "",
          src: "/static/imgs/4@2x.png",
        },
        {
          href: "/pages/game/game",
          src: "/static/imgs/5@2x.png",
        },
        {
          href: "/pages/player/playerIndex",
          src: "/static/imgs/6@2x.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.play-box {
  width: 100%;
  .play-item {
    width: 220rpx;
    height: 148rpx;
  }
}
</style>
