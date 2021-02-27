<template>
  <view class="infomation-list">
    <infomation-item
      v-for="item in infomationList"
      :key="$strJoin('infomation-', item.id)"
      :article="item"
      :filter-name="filterName"
    ></infomation-item>
    <view v-if="!infomationList.length" class="no-data ng-text-center">
      暂无数据
    </view>
  </view>
</template>

<script>
import InfomationItem from "ngcomponents/page/infomation/InfomationItem";
export default {
  components: { InfomationItem },
  props: {
    infomationList: {
      type: Array,
      default: () => [],
    },
    filterName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.infomation-list {
  background: white;
  min-height: 100rpx;
  .no-data {
    height: 100rpx;
    line-height: 100rpx;
    color: $descFontColor;
  }
}
</style>
