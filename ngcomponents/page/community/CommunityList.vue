<template>
  <view>
    <community-item
      v-for="(item, index) in list"
      :key="$strJoin('community-', index)"
    ></community-item>
  </view>
</template>

<script>
import CommunityItem from "ngcomponents/page/community/CommunityItem";
export default {
  components: { CommunityItem },
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
};
</script>

<style lang="scss" scoped></style>
