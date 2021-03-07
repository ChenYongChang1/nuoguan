<template>
  <view class="footer-box">
    <hans-tabbar
      :active="isBrand || active"
      :list="list"
      @tabChange="tabChange"
    ></hans-tabbar>
    <uni-popup ref="popup" mas type="share" @close="dialogChange">
      <view class="child-menu">
        <view
          v-for="(item, index) in children"
          :key="index"
          class="menu ng-text-center"
          @tap="goChildPath(item.href)"
          >{{ item.name }}</view
        >
      </view>
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
      isBrand: "",
      children: [],
      list: [
        {
          page: "brand",
          text: "品牌",
          iconPath: "/static/imgs/tabbar/brand.png",
          selectedIconPath: "/static/imgs/tabbar/brand-1.png",
          child: [
            {
              name: "诺家品牌",
              href: "https://www.norgren.com.cn/page/3.html",
            },
            {
              name: "诺家新闻",
              href: "https://www.norgren.com.cn/399/index.html",
            },
            {
              name: "产品专区",
              href: "https://www.norgren.com.cn/index.php/Home/Search/filter/",
            },
            {
              name: "下载中心",
              href: "https://www.norgren.com.cn/388/index.html",
            },
          ],
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
      return this.$store.state.nowPage;
    },
  },
  onShow(options) {
    this.getTabBar();
  },
  methods: {
    goChildPath(path){
      this.$goWebViewPath(path)
    },
    async getTabBar() {
      const res = await this.$store.dispatch("getMenuTabbar");
      console.log(res);
    },
    tabChange(index) {
      if (this.list[index].child && this.list[index].child.length > 0) {
        this.showDialog(this.list[index].page);
        this.children = this.list[index].child;
      } else {
        this.isBrand = "";
        // 取消记录的老值
        // this.active = this.list[index].page;
        // 关闭弹框
        this.$store.commit("SET_NOW_PAGE", this.list[index].page || "index");
        this.$refs.popup.close();
        this.$goPath(this.list[index].path, 2);
        console.log(this.active);
      }
    },
    dialogChange({ show, type }) {
      if (!show) {
        this.isBrand = "";
      }
    },
    showDialog(page) {
      this.isBrand = page;
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
.child-menu {
  width: 100%;
  position: absolute;
  bottom: 148rpx;
}
.menu {
  width: 100%;
  min-height: 50rpx;
  color: white;
  background: $themeColor;
  padding: 10px 0;
}
.menu:nth-child(2n) {
  // background: rgb(139, 17, 46);
}
</style>
