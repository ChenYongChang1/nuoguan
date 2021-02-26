<template>
  <view class="filter-tab ng-flex">
    <view
      class="btn-item ng-text-center font-14 weight-550"
      :class="{ active: item.value === defaultVal }"
      v-for="(item, index) in filterBtn"
      :key="index"
      @tap="toggle(item)"
    >
      {{ item.name }}
    </view>
  </view>
</template>

<script>
export default {
  props: {
    filterType: {
      type: String,
      default: "",
    },
    defaultVal: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      filterBtn: [
        {
          value: 1,
          name: "论坛",
        },
        {
          value: 2,
          name: "大咖说",
        },
        {
          value: 3,
          name: "推荐",
        },
        {
          value: 4,
          name: "试用申请",
        },
        {
          value: 5,
          name: "就业",
        },
      ],
    };
  },
  methods: {
    toggle(row) {
      this.$emit("toggle", { type: this.filterType, value: row.value });
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-tab {
  width: 100%;
  height: 70rpx;
  border-top: solid 1px $lineColor;
  border-bottom: solid 1px $lineColor;
  margin: 8rpx 0;
  .btn-item {
    width: 168rpx;
    height: 100%;
    line-height: 68rpx;
    color: $baseFontColor;
    border-right: solid 1px $lineColor;
  }
  .btn-item:last-child {
    border-right: none;
  }
  .active {
    background: $themeColor;
    color: white;
  }
}
</style>
