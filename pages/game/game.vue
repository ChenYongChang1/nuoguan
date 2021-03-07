<template>
  <view class="game-box ng-flex ng-flex-warp ng-content-start">
    <view
      v-for="(item, index) in games"
      :key="index"
      class="game-item box-shadow"
      @tap="$goWebViewPath(item.href)"
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
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          name: "幸运翻牌",
          src: "/static/imgs/game/chaojimali.png",
          href: `https://store.eqxiu.com/gc/detail/1806632`,
        },
        {
          name: "牛转乾坤",
          src: "/static/imgs/game/hundouluo.png",
          href: `https://store.eqxiu.com/gc/detail/1694221`,
        },
        {
          name: "气动消消乐",
          src: "/static/imgs/game/tanke.png",
          href: `https://store.eqxiu.com/gc/detail/1289284`,
        },
        {
          name: "百变扭蛋机",
          src: "/static/imgs/game/pk.png",
          href: `https://store.eqxiu.com/gc/detail/1627635`,
        },
        {
          name: "保护诺博士",
          src: "/static/imgs/game/pk.png",
          href: `https://store.eqxiu.com/gc/detail/1614313`,
        },
        {
          name: "跳一跳",
          src: "/static/imgs/game/pk.png",
          href: `https://store.eqxiu.com/gc/detail/1316770`,
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
