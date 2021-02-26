<template>
  <view class="add-tag">
    <add-modules title="添加标签">
      <view
        v-for="(item, index) in filterList"
        :key="$strJoin('modal-filter', index)"
        class="modal-filter-item"
      >
        <view class="modal-filter-title ng-flex ng-flex-space">
          <view class="text-title ng-flex ng-align-center">
            <view class="dot ng-bg-theme-color"></view>
            <view class="ng-base-color font-16 weight-550">
              {{ item.name }}
            </view>
          </view>
        </view>
        <view class="modal-filter-btn ng-flex">
          <view
            v-for="(btnItem, btnIndex) in item.btns"
            :key="$strJoin('modal-btn-', btnIndex)"
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
    </add-modules>
  </view>
</template>

<script>
import AddModules from "ngcomponents/page/community/add/AddModules";
export default {
  components: { AddModules },
  props: {
    defaultVal: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filterList: [
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
          value: 2,
          btns: [
            { value: 0, name: "全部" },
            { value: 1, name: "设计院" },
            { value: 2, name: "成套" },
          ],
        },
        {
          name: "采购",
          value: 3,
          btns: [
            { value: 0, name: "全部" },
            { value: 1, name: "私营业主" },
          ],
        },
        {
          name: "ces",
          value: 4,
          btns: [{ value: 0, name: "全部" }],
        },
      ],
    };
  },
  methods: {
    selectRow(one, two) {
      this.$emit("toggle", { type: "tag", value: [one, two] });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-filter-item {
  width: 100%;
  .modal-filter-title {
    width: 100%;
    margin-bottom: 30rpx;
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
      color: $secondFontColor;
      border: solid 1px $baseFontColor;
      margin: 0 30rpx 24rpx 0;
    }
    .active {
      background: $themeColor;
      color: white;
      border: solid 1px $themeColor;
    }
  }
}
</style>
