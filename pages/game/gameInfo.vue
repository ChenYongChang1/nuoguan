<template>
  <web-view :src="src" />
</template>

<script>
export default {
  data() {
    return {
      src: ''
    };
  },
  onLoad(options = {}) {
    this.src = options.href
    // console.log(options.href, "https://store.eqxiu.com/gc/detail/1806632");
  },
};
</script>

<style></style>
