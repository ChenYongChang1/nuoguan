<template>
  <view>
    <view class="infomation opacity1">
      <filter-infomation @toggle="hanlderChange"></filter-infomation>
      <!-- <wx-swiper></wx-swiper> -->
      <filter-tab-info
        v-if="filterBtn.length"
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
        word: "",
        tab: 0,
        page: 1,
        pageSize: 20,
      },
      filterBtn: [],
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
  async onShow() {
    await this.getArticleGenre();
    this.getInfoMation();
  },
  methods: {
    // ...mapActions("infomation", ["getInfomationList"]),
    hanlderChange({ type, value }) {
      this.filterData[type] = value;
      this.getInfoMation();
    },
    async getArticleGenre() {
      const res = await this.$store.dispatch("infomation/getArticleGenre");
      if (res.list && res.list.length) {
        this.filterBtn = res.list;
        this.filterData.tab = res.list[0].id;
      } else {
        this.filterBtn = [];
      }
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
.opacity {
  opacity: 0;
}
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
