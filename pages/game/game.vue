<template>
  <view class="game-box ng-flex ng-flex-warp ng-content-start">
    <view
      v-for="(item, index) in games"
      :key="index"
      class="game-item box-shadow"
    >
      <navigator
        :url="item.href"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <view class="game-cover">
          <image :src="item.src" mode="scaleToFill" />
        </view>
        <view class="game-desc">
          <view class="topic-title">{{ item.name }}</view>
          <view class="come-game ng-flex ng-align-center">
            点击进入游戏
            <image src="/static/imgs/game/come.png" mode="scaleToFill" />
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          name: "超级玛丽",
          src: "/static/imgs/game/chaojimali.png",
          href: "/pages/game/gameInfo?id=" + 1,
        },
        {
          name: "魂斗罗",
          src: "/static/imgs/game/hundouluo.png",
          href: "/pages/game/gameInfo?id=" + 2,
        },
        {
          name: "坦克大战",
          src: "/static/imgs/game/tanke.png",
          href: "/pages/game/gameInfo?id=" + 3,
        },
        {
          name: "街霸对决",
          src: "/static/imgs/game/pk.png",
          href: "/pages/game/gameInfo?id=" + 4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
uni-navigator {
  width: auto;
  height: auto;
}
.game-box {
  width: 100%;
  height: 100vh;
  background: $bodyBg;
  padding: 48rpx 60rpx;
  .game-item {
    width: 280rpx;
    height: 420rpx;
    border-radius: 8rpx;
    background: white;
    margin: 0 70rpx 50rpx 0;
    .game-cover {
      width: 280rpx;
      height: 280rpx;
      > image {
        border-radius: 8rpx 8rpx 0 0;
      }
    }
    .game-desc {
      padding: 20rpx 0;
      .topic-title {
        height: 44rpx;
        font-size: 16px;
        font-weight: 500;
        color: #000000;
        line-height: 44rpx;
        margin-bottom: 20rpx;
      }
      .come-game {
        width: 100%;
        height: 32rpx;
        font-size: 22rpx;
        font-weight: 400;
        color: #333333;
        line-height: 32rpx;
        padding-left: 24rpx;
        > image {
          width: 20rpx;
          height: 16rpx;
          margin-left: 20rpx;
        }
      }
    }
  }
  .game-item:nth-child(2n) {
    margin: 0 0 50rpx 0;
  }
}
</style>
