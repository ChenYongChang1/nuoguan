<template>
  <view class="com-filter ng-flex ng-flex-space">
    <view class="input-filter">
      <image
        class="big"
        src="/static/imgs/community/fangdajing.svg"
        mode="scaleToFill"
      />
      <input
        v-model="filterData.word"
        class="search-input font-13"
        placeholder="搜索你感兴趣的内容"
        placeholder-class="input-placeholder"
      />
    </view>
    <view
      class="all-filter ng-text-center ng-flex ng-flex-space ng-align-center ng-flex-column"
      @tap="showRightFilter = true"
    >
      <image
        src="/static/imgs/community/filter.svg"
        class="icon-image ng-margin-auto"
        mode="scaleToFill"
      />
      <text class="font-12">筛选</text>
    </view>
    <ng-popup :show-modal="showRightFilter" @close="close">
      <view class="filter-box">
        <modal-filter
          filter-type="filter"
          :default-val="filterData.filter"
          @toggle="hanlderChange"
        ></modal-filter>
      </view>
    </ng-popup>
  </view>
</template>

<script>
import NgPopup from "ngcomponents/base/NgPopup";
import ModalFilter from "ngcomponents/page/community/ModalFilter";
export default {
  components: { NgPopup, ModalFilter },
  data() {
    return {
      showRightFilter: false,
      filterData: {
        word: "",
        filter: [0, 0],
      },
    };
  },
  methods: {
    hanlderChange({ type, value }) {
      this.filterData[type] = value;
      this.close()
    },
    close() {
      this.showRightFilter = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-image {
  width: 30rpx;
  height: 30rpx;
}
.com-filter {
  width: 100%;
  height: 80rpx;
  padding: 5rpx 10rpx;
  .input-filter {
    position: relative;
    border-radius: 8rpx;
    width: calc(100% - 100rpx);
    .big {
      position: absolute;
      top: 50%;
      left: 10rpx;
      transform: translateY(-50%);
      width: 40rpx;
      height: 40rpx;
    }
    .search-input {
      display: block;
      width: 100%;
      height: 100%;
      background: $moduleBg;
      padding: 0 10rpx 0 60rpx;
    }
  }
  .all-filter {
    width: 80rpx;
    height: 80rpx;
    line-height: 40rpx;
  }
  .filter-box {
    width: 500rpx;
    height: 100%;
  }
}
</style>
