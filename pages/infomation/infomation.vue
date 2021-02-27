<template>
  <view class="infomation">
    <filter-infomation></filter-infomation>
    <wx-swiper></wx-swiper>
    <filter-tab
      filter-type="tab"
      :default-val="filterData.tab"
      :filter-btn="filterBtn"
      @toggle="hanlderChange"
    ></filter-tab>
    <infomation-list
      :infomation-list="infomationList"
      :filter-name="filterName.name"
    ></infomation-list>
  </view>
</template>

<script>
import FilterInfomation from "ngcomponents/page/infomation/FilterInfomation";
import FilterTab from "ngcomponents/page/infomation/FilterTab";
import InfomationList from "ngcomponents/page/infomation/InfomationList";
import { mapActions } from "vuex";
export default {
  components: { FilterInfomation, FilterTab, InfomationList },
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
          src: "/static/imgs/news/new.svg",
          activeSrc: "/static/imgs/news/new-active.svg",
          name: "新品速递",
        },
        {
          value: 1,
          src: "/static/imgs/news/hangye.svg",
          activeSrc: "/static/imgs/news/hangye-active.svg",
          name: "行业快讯",
        },
        {
          value: 2,
          src: "/static/imgs/news/xinwen.svg",
          activeSrc: "/static/imgs/news/xinwen-active.svg",
          name: "新闻播报",
        },
        {
          value: 3,
          src: "/static/imgs/news/linedown.svg",
          activeSrc: "/static/imgs/news/linedown-active.svg",
          name: "线上线下活动",
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
  mounted() {
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
