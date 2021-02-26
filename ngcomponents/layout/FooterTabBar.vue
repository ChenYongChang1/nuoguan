<template>
  <view>
    <view class="footer-box ng-flex ng-flex-around ng-align-center">
      <view
        class="ng-flex ng-flex-center ng-flex-column ng-text-center"
        :class="{ active: active === 'brand' }"
        @click="showDialog"
      >
        <view class="icon">
          <image src="/static/imgs/tabbar/brand.png" mode="scaleToFill" />
        </view>
        品牌
      </view>
      <view
        class="ng-flex ng-flex-center ng-flex-column ng-text-center"
        :class="{ active: active === 'index' }"
        @click="changePage('/index/index', 'link')"
      >
        <view class="icon">
          <image src="/static/imgs/tabbar/index.png" mode="scaleToFill"
        /></view>
        首页
      </view>
      <view
        class="ng-flex ng-flex-center ng-flex-column ng-text-center"
        :class="{ active: active === 'my' }"
        @click="changePage('/user/usercenter', 'link')"
      >
        <view class="icon">
          <image src="/static/imgs/tabbar/my.png" mode="scaleToFill"
        /></view>
        我的
      </view>
    </view>
    <uni-popup ref="popup" mas type="share" @close="dialogChange">
      <view class="menu ng-text-center">品牌</view>
    </uni-popup>
  </view>
</template>

<script>
import uniPopup from "components/uni-popup/uni-popup";
export default {
  name: "FooterTabBar",
  components: { uniPopup },
  data() {
    return {
      oldPage: "",
    };
  },
  computed: {
    active() {
      //   const pages = getCurrentPages();
      //   const page = pages[pages.length - 1].route;
      //   page.split("/").reverse()[0] ===
      return this.$store.state.nowPage; // this.$store.nowPage;
    },
  },
  methods: {
    changePage(name, type) {
      if (type === "link") {
        // 取消记录的老值
        this.oldPage = "";
        // 关闭弹框
        this.$refs.popup.close();
        uni.navigateTo({ url: this.$strJoin("/pages", name) });
      }
    },
    dialogChange({ show, type }) {
      // 当弹框关闭的时候 返回选中之前的值 然后吧之前的值指空
      if (!show) {
        this.$store.commit("SET_NOW_PAGE", this.oldPage || 'index');
        this.oldPage = "";
      }
    },
    showDialog() {
      if (this.oldPage === this.active) {
        // 老值和 现在vuex里面的相同则表示 需要取消弹框
        // this.changePage("brand");
        this.$store.commit("SET_NOW_PAGE", this.oldPage);
        this.$refs.popup.close();
        this.oldPage = "";
      } else {
        this.oldPage = this.active;
        // this.changePage("brand");
        this.$store.commit("SET_NOW_PAGE", "brand");
        this.$refs.popup.open();
      }
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
