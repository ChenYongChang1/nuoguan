<template>
  <view>
    <web-view :src="url"></web-view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      url: "", // pdf链接
    };
  },
  onLoad(options) {
    // let links = decodeURIComponent(options.links);
    // 设置连接地址；
    this.url = options.links; //  `/common-html/html/pdf.html?url=${links}` //   `/hybrid/html/pdf.html?url=${links}`;
  },
};
</script>
