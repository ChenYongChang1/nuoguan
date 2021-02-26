<template>
  <view>
    <tab-bar></tab-bar>
  </view>
</template>

<script>
export default {
  onShow() {
    this.$store.commit("SET_NOW_PAGE", "my");
  },
};
</script>

<style></style>
