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
  </view>
</template>

<script>
import FilterCommunity from "ngcomponents/page/community/FilterCommunity";
import FilterTab from "ngcomponents/page/community/FilterTab";
import CommunityList from 'ngcomponents/page/community/CommunityList'
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
}
</style>
