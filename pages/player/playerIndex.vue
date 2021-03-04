<template>
  <view class="infomation">
    <filter-infomation bg-img="player.png"></filter-infomation>
    <!-- <wx-swiper></wx-swiper> -->
    <filter-tab-info
      filter-type="tab"
      :default-val="filterData.tab"
      :filter-btn="filterBtn"
      @toggle="hanlderChange"
    ></filter-tab-info>
  </view>
</template>

<script>
import FilterInfomation from "ngcomponents/page/infomation/FilterInfomation";
import FilterTabInfo from "ngcomponents/page/infomation/FilterTabInfo";
export default {
  components: { FilterInfomation, FilterTabInfo },
  data() {
    return {
      filterData: {
        tab: 0,
        page: 1,
        pageSize: 20,
      },
      filterBtn: [
        {
          id: 0,
          name: "正在直播",
        },
        {
          id: 1,
          name: "线上活动",
        },
        {
          id: 2,
          name: "线下活动",
        },
        {
          id: 3,
          name: "热门活动",
        },
      ],
      infomationList: [],
    };
  },
  computed: {
    filterName() {
      return (
        this.filterBtn.find((item) => item.id === this.filterData.tab) || {}
      );
    },
  },
  onShow() {},
  methods: {
    // ...mapActions("infomation", ["getInfomationList"]),
    hanlderChange({ type, value }) {
      this.filterData[type] = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.infomation {
  width: 100%;
  background: $bodyBg;
}
</style>
