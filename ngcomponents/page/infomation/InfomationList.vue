<template>
  <view>
    <view
      v-if="infomationList.length"
      class="infomation-list ng-flex ng-flex-warp ng-content-start pdf-list"
    >
      <infom-industry-item
        v-for="item in infomationList"
        :key="$strJoin('infomation-indu-', item.id)"
        :article="item"
        :type="item.type"
        :filter-name="filterName"
      ></infom-industry-item>
    </view>
    <view v-else class="no-data ng-text-center"> 暂无数据 </view>
  </view>
</template>

<script>
// import InfomationItem from "ngcomponents/page/infomation/InfomationItem";
import InfomIndustryItem from "ngcomponents/page/infomation/InfomIndustryItem";
export default {
  components: { InfomIndustryItem },
  props: {
    infomationList: {
      type: Array,
      default: () => [],
    },
    filterName: {
      type: String,
      default: "",
    },
    filterData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.no-data {
  height: calc(100vh - 290rpx);
  line-height: 100rpx;
  color: $descFontColor;
}
.infomation-list {
  min-height: calc(100vh - 290rpx);
  padding: 40rpx 24rpx 0 24rpx;
}
.pdf-list {
  width: 690rpx;
  margin: auto;
  padding: 40rpx 10rpx 0 10rpx;
  .pdf-item {
    margin-right: 30rpx;
    margin-bottom: 28rpx;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .pdf-item:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
