<template>
  <view>
    <view
      class="title-route ng-flex ng-flex-space ng-align-center font-14 ng-text-center"
    >
      <view class="ng-text-left">取消</view>
      <view class="ng-bg-theme-color color-white">确定</view>
    </view>
    <view class="add-box">
      <add-tag :default-val="filterData.tag" @toggle="hanlderChange"></add-tag>
      <add-title
        filter-name="标题"
        :max-num="20"
        margin="40rpx 0 0 0"
        :default-val="filterData.title"
        @toggle="hanlderChange"
      ></add-title>
      <add-title
        filter-name="段落"
        :max-num="120"
        margin="40rpx 0 0 0"
        :default-val="filterData.title"
        @toggle="hanlderChange"
      ></add-title>
      <add-photo
        filter-name="图片"
        :max-num="120"
        margin="40rpx 0 0 0"
        :default-val="filterData.title"
        @toggle="hanlderChange"
      ></add-photo>
    </view>
  </view>
</template>

<script>
import AddTag from "ngcomponents/page/community/add/AddTag";
import AddTitle from "ngcomponents/page/community/add/AddTitle";
import AddPhoto from "ngcomponents/page/community/add/AddPhoto";
export default {
  components: {
    AddTag,
    AddTitle,
    AddPhoto,
  },
  data() {
    return {
      filterData: {
        photo: [],
        title: "",
        tag: [1, 0],
      },
    };
  },
  methods: {
    hanlderChange({ type, value }) {
      this.filterData[type] = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.title-route {
  width: 100%;
  height: 80rpx;
  padding: 0 30rpx;
  border-bottom: solid 1px $lineColor;
  > view {
    width: 120rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 10rpx;
  }
}
.add-box {
  width: 100%;
  padding: 10rpx 20rpx;
}
</style>
