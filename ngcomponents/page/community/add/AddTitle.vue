<template>
  <view class="add-tag" :style="{ margin }">
    <add-modules :title="'添加' + filterName">
      <view class="textarea-box">
        <textarea
          v-model="word"
          :maxlength="maxNum"
          class="font-12"
          :placeholder="$strJoin('请添加', filterName)"
        ></textarea>
        <view class="remain-text font-12"
          >你还可以输入
          <text>{{ maxNum - (word || "").length }}</text>
          个字</view
        >
      </view>
    </add-modules>
  </view>
</template>

<script>
import AddModules from "ngcomponents/page/community/add/AddModules";
export default {
  components: { AddModules },
  props: {
    filterName: {
      type: String,
      default: "",
    },
    margin: {
      type: String,
      default: "",
    },
    maxNum: {
      type: Number,
      default: 20,
    },
    defaultVal: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      word: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.textarea-box {
  width: 100%;
  height: 160rpx;
  border: solid 1px $lineColor;
  border-radius: 10rpx;
  padding: 20rpx 40rpx 35rpx 40rpx;
  margin-bottom: 20rpx;
  position: relative;
  .remain-text {
    position: absolute;
    bottom: 20rpx;
    height: 20rpx;
    right: 0;
    color: $descFontColor;
    padding-right: 40rpx;
    > text {
      color: $themeColor;
    }
  }
}
</style>
