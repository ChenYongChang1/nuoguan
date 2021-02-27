<template>
  <view>
    <topic-list margin="0 32rpx 0 0"></topic-list>
    <gold-wheat></gold-wheat>
  </view>
</template>

<script>
import TopicList from "ngcomponents/page/community/list/TopicList";
import GoldWheat from "ngcomponents/page/community/list/GoldWheat";
export default {
  components: { TopicList, GoldWheat },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
