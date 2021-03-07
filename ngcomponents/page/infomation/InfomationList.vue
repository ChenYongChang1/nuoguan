<template>
  <view class="info-min-height">
    <view
      v-if="infomationList.length"
      class="infomation-list ng-flex ng-align-start ng-flex-warp"
    >
      <!-- ng-flex ng-flex-warp ng-content-start pdf-list -->
      <view
        v-for="item in infomationList"
        :key="$strJoin('infomation-indu-', item.id)"
        :class="item.type === 2 ? 'pdf-item' : 'info-item'"
      >
        <infom-industry-item
          :article="{ ...item, isLike: false }"
          :type="item.type"
          :filter-name="filterName"
        ></infom-industry-item>
      </view>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.info-min-height {
  min-height: calc(100vh - 290rpx);
}
.no-data {
  height: calc(100vh - 290rpx);
  line-height: 100rpx;
  color: $descFontColor;
}
.infomation-list {
  padding: 40rpx 24rpx 0 24rpx;
  .pdf-item {
    width: 320rpx;
    margin: 0 30rpx 28rpx 12rpx;
  }
  .pdf-item:nth-child(2n) {
    margin-left: 0;
    margin-right: 0;
  }
  .info-item {
    width: 100%;
  }
}
// .pdf-list {
//   width: 690rpx;
//   margin: auto;
//   padding: 40rpx 10rpx 0 10rpx;
//   .pdf-item {
//     margin-right: 30rpx;
//     margin-bottom: 28rpx;
//     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
//   }
//   .pdf-item:nth-child(2n) {
//     margin-right: 0;
//   }
// }
</style>
