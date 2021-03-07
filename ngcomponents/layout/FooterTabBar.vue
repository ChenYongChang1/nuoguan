<template>
  <view class="footer-box">
    <hans-tabbar
      :active="isBrand ? 'brand' : active"
      :list="list"
      @tabChange="tabChange"
    ></hans-tabbar>
    <uni-popup ref="popup" mas type="share" @close="dialogChange">
      <view class="menu ng-text-center">品牌</view>
    </uni-popup>
  </view>
</template>

<script>
import uniPopup from "components/uni-popup/uni-popup";
import hansTabbar from "components/hans-tabbar/hans-tabbar";
export default {
  name: "FooterTabBar",
  components: { uniPopup, hansTabbar },
  data() {
    return {
      isBrand: false,
      // active: "index",
      list: [
        {
          page: "brand",
          text: "品牌",
          iconPath: "/static/imgs/tabbar/brand.png",
          selectedIconPath: "/static/imgs/tabbar/brand-1.png",
          child: [],
        },
        {
          page: "index",
          text: "首页",
          path: "/pages/index/index",
          iconPath: "/static/imgs/tabbar/index-0.png",
          selectedIconPath: "/static/imgs/tabbar/index.png",
        },
        {
          page: "my",
          text: "我的",
          path: "/pages/user/usercenter",
          iconPath: "/static/imgs/tabbar/my.png",
          selectedIconPath: "/static/imgs/tabbar/my-1.png",
        },
      ],
    };
  },
  computed: {
    active() {
      return this.$store.state.nowPage; // this.$store.nowPage;
    },
  },
  onShow(options) {
    this.getTabBar();
  },
  methods: {
    async getTabBar() {
      const res = await this.$store.dispatch("getMenuTabbar");
      console.log(res);
    },
    tabChange(index) {
      if (this.list[index].page === "brand") {
        this.showDialog();
      } else {
        this.isBrand = false;
        // 取消记录的老值
        // this.active = this.list[index].page;
        this.$store.commit("SET_NOW_PAGE", this.list[index].page || "index");
        // 关闭弹框
        this.$refs.popup.close();
        this.$goPath(this.list[index].path, 2);
        console.log(this.active);
      }
    },
    dialogChange({ show, type }) {
      if (!show) {
        this.isBrand = false;
      }
    },
    showDialog() {
      this.isBrand = true;
      this.$refs.popup.open();
    },
  },
};
</script>

<style lang="scss">
.footer-box {
  width: 100%;
  height: 148rpx;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  .icon {
    width: 44rpx;
    height: 44rpx;
    // background: gainsboro;
    margin: auto;
  }
  .active {
    color: $themeColor;
  }
}
.menu {
  width: 100%;
  min-height: 50rpx;
  color: white;
  position: absolute;
  bottom: 148rpx;
  background: $themeColor;
  padding: 10px 0;
}
</style>
