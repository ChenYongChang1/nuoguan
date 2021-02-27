<template>
  <view class="article-container">
    <article-community></article-community>
    <article-comment></article-comment>
  </view>
</template>

<script>
import ArticleCommunity from "ngcomponents/page/community/detail/ArticleCommunity";
import ArticleComment from "ngcomponents/page/community/detail/ArticleComment";
export default {
  components: { ArticleCommunity, ArticleComment },
};
</script>

<style lang="scss" scoped>
.article-container {
  width: 100%;
  background: $bodyBg;
}
</style>
