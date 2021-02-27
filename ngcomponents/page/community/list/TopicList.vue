<template>
  <view class="topic-color" :style="{ margin }">
    <view class="topic-list box-shadow">
      <view class="topic-title">话题榜</view>
      <view class="topic-list-table ng-flex ng-flex-warp">
        <view
          v-for="(item, index) in topicList"
          :key="index"
          class="topic-item ng-flex ng-align-center"
          :class="{ marginBottom: getHeight(index) }"
        >
          {{ item.name }}
          <image
            :src="$strJoin('/static/imgs/comment/', item.tag, '.png')"
            mode="scaleToFill"
          />
        </view>
        <view class="line"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    margin: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      topicList: [
        {
          name: "执行元件/气缸",
          tag: "new",
        },
        {
          name: "安全系统产品",
          tag: "suj",
        },
        {
          name: "空气处理设备",
          tag: "new",
        },
        {
          name: "空气处理设备",
        },
        {
          name: "空气处理设备",
        },
        {
          name: "空气处理设备",
        },
      ],
    };
  },
  methods: {
    getHeight(index) {
      // 6 (5 4)
      const ou = this.topicList.length % 2 === 0;
      if (ou) {
        return this.topicList.length - 3 < index;
      }
      return this.topicList.length - 2 < index;
    },
  },
};
</script>

<style lang="scss" scoped>
.topic-color {
  width: 100%;
  padding: 36rpx 18rpx;
  .topic-list {
    width: 100%;
    background: white;
    border-radius: 8rpx;
    padding: 32rpx;
    .topic-list-table {
      width: 100%;
      margin-top: 28rpx;
      position: relative;
      .line {
        width: 2rpx;
        height: 100%;
        background: #999;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .topic-item {
        width: 50%;
        height: 42rpx;
        margin-bottom: 24rpx;
        // border-right: solid 2rpx #999;
        > image {
          width: 28rpx;
          height: 28rpx;
          margin-left: 20rpx;
        }
      }
      .marginBottom {
        margin-bottom: 0;
      }
      .topic-item:nth-child(2n) {
        padding-left: 51rpx;
        border-right: none;
      }
    }
  }
}
</style>
