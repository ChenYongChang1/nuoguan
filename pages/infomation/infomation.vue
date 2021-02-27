<template>
  <view class="infomation">
    <filter-infomation></filter-infomation>
    <!-- <wx-swiper></wx-swiper> -->
    <filter-tab-info
      filter-type="tab"
      :default-val="filterData.tab"
      :filter-btn="filterBtn"
      @toggle="hanlderChange"
    ></filter-tab-info>
    <infomation-list
      :infomation-list="infomationList"
      :filter-name="filterName.name"
      :filter-data="filterData"
    ></infomation-list>
  </view>
</template>

<script>
import FilterInfomation from "ngcomponents/page/infomation/FilterInfomation";
import FilterTabInfo from "ngcomponents/page/infomation/FilterTabInfo";
import InfomationList from "ngcomponents/page/infomation/InfomationList";
export default {
  components: { FilterInfomation, FilterTabInfo, InfomationList },
  data() {
    return {
      filterData: {
        tab: 0,
        page: 1,
        pageSize: 20,
      },
      filterBtn: [
        {
          value: 0,
          name: "新品速递",
        },
        {
          value: 1,
          name: "行业快讯",
        },
        {
          value: 2,
          name: "新闻播报",
        },
        {
          value: 3,
          name: "线上活动",
        },
      ],
      infomationList: [],
    };
  },
  computed: {
    filterName() {
      return (
        this.filterBtn.find((item) => item.value === this.filterData.tab) || {}
      );
    },
  },
  onShow() {
    this.getInfoMation();
  },
  methods: {
    // ...mapActions("infomation", ["getInfomationList"]),
    hanlderChange({ type, value }) {
      this.filterData[type] = value;
      this.getInfoMation();
    },
    async getInfoMation() {
      const res = await this.$store.dispatch(
        "infomation/getInfomationList",
        this.filterData
      );
      this.infomationList = res.list || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.infomation {
  width: 100%;
  background: $bodyBg;
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
