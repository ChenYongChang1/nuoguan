<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
    // const goPath = uni.switchTab;
    // uni.switchTab = (option) => {
    //   console.log(option);
    //   // const { from, url } = option;
    //   // if (from === "tabBar" && url === "/pages/brand/brand") {
    //   //   return;
    //   // }
    //   // goPath(option);
    // };
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "./common/uni.css";
@import "./common/common.scss";
@import "./common/_mixins.scss";
@import "./common/_function.scss";
</style>
