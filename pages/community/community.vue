<template>
  <view class="community">
    <!-- <wx-swiper></wx-swiper> -->
    <filter-community></filter-community>
    <!-- <filter-tab
      filter-type="tab"
      :default-val="filterData.tab"
      @toggle="hanlderChange"
    ></filter-tab> -->
    <community-list></community-list>
    <navigator
      url="/pages/community/addArticle"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <view class="add-article ng-flex ng-flex-center ng-align-center">
        <image src="/static/imgs/comment/add.png" mode="scaleToFill" />
      </view>
    </navigator>
    <!-- <tab-bar></tab-bar> -->
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
        user: '',
        word: ''
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
  background: $bodyBg;
  .add-article {
    position: fixed;
    width: 100rpx;
    height: 100rpx;
    bottom: 180rpx;
    right: 70rpx;
  }
}
</style>
