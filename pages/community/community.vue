<template>
  <view class="community">
    <wx-swiper></wx-swiper>
    <filter-community></filter-community>
    <filter-tab
      filter-type="tab"
      :default-val="filterData.tab"
      @toggle="hanlderChange"
    ></filter-tab>
    <community-list></community-list>
    <navigator url="/pages/community/addArticle" open-type="navigate" hover-class="navigator-hover">
      <view class="add-article ng-flex ng-flex-center ng-align-center">
        <image src="/static/imgs/community/add.svg" mode="scaleToFill" />
      </view>
    </navigator>
  </view>
</template>

<script>
import FilterCommunity from "ngcomponents/page/community/FilterCommunity";
import FilterTab from "ngcomponents/page/community/FilterTab";
import CommunityList from "ngcomponents/page/community/CommunityList";
export default {
  components: { FilterCommunity, FilterTab, CommunityList },
  data() {
    return {
      filterData: {
        tab: 1,
      },
    };
  },
  methods: {
    hanlderChange({ type, value }) {
      this.filterData[type] = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.community {
  width: 100%;
  .add-article {
    position: fixed;
    width: 80rpx;
    height: 80rpx;
    transform: rotate(45deg);
    bottom: 180rpx;
    right: 70rpx;
    background: $themeColor;
    border-radius: 10rpx;
    box-shadow: 0 0 12px 0 themeColor(0.32);
    > image {
      width: 60rpx;
      height: 60rpx;
      transform: rotate(-45deg);
      display: block;
    }
  }
}
</style>
