<template>
  <view class="modal-filter">
    <view
      v-for="(item, index) in filterList"
      :key="index"
      class="modal-filter-item"
    >
      <view class="modal-filter-title ng-flex ng-flex-space">
        <view class="text-title ng-flex ng-align-center">
          <view class="dot ng-bg-theme-color"></view>
          <view class="ng-base-color font-14"> {{ item.name }} </view>
        </view>
        <view class="modal-down">
          <image src="/static/imgs/community/down.svg" mode="scaleToFill" />
        </view>
      </view>
      <view class="modal-filter-btn ng-flex">
        <view
          v-for="(btnItem, btnIndex) in item.btns"
          :key="btnIndex"
          class="modal-btn-item"
          :class="{
            active:
              defaultVal[0] === item.value && defaultVal[1] === btnItem.value,
          }"
          @tap="selectRow(item.value, btnItem.value)"
          >{{ btnItem.name }}</view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    defaultVal: {
      type: Array,
      default: () => [],
    },
    filterType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      filterList: [
        {
          name: "全部",
          value: 0,
          btns: [{ value: 0, name: "全部" }],
        },
        {
          name: "电工技师",
          value: 1,
          btns: [
            { value: 0, name: "全部" },
            { value: 1, name: "家装电工" },
            { value: 2, name: "维修电工" },
            { value: 3, name: "物业电工" },
          ],
        },
        {
          name: "电气工程师",
          value: 1,
          btns: [
            { value: 0, name: "全部" },
            { value: 1, name: "设计院" },
            { value: 2, name: "成套" },
          ],
        },
        {
          name: "采购",
          value: 1,
          btns: [
            { value: 0, name: "全部" },
            { value: 1, name: "私营业主" },
          ],
        },
        {
          name: "ces",
          value: 1,
          btns: [{ value: 0, name: "全部" }],
        },
      ],
    };
  },
  methods: {
    selectRow(first, two) {
      this.$emit("toggle", { type: this.filterType, value: [first, two] });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-filter {
  width: 100%;
  padding: 10rpx 30rpx;
  .modal-filter-item {
    width: 100%;
    padding: 60rpx 0;
    border-bottom: solid 1px $lineColor;
    .modal-filter-title {
      width: 100%;
      margin-bottom: 40rpx;
      .text-title {
        max-width: 450rpx;
      }
      .dot {
        width: 10rpx;
        height: 10rpx;
        border-radius: 10rpx;
        margin-right: 14rpx;
      }
      .modal-down {
        width: 30rpx;
        height: 30rpx;
      }
    }
    .modal-filter-btn {
      width: 100%;
      flex-wrap: wrap;
      .modal-btn-item {
        padding: 6rpx 10rpx;
        border-radius: 8rpx;
        color: $baseFontColor;
        border: solid 1px $baseFontColor;
        margin: 0 20rpx 12rpx 0;
      }
      .modal-btn-item:nth-child(3n) {
        margin-right: 0;
      }
      .active {
        background: $themeColor;
        color: white;
        border: solid 1px $themeColor;
      }
    }
  }
}
</style>
