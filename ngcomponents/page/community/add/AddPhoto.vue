<template>
  <view class="add-tag" :style="{ margin }">
    <add-modules :title="'添加' + filterName">
      <view class="photo-box ng-flex">
        <!-- <view
          v-for="item in photo"
          :key="item.url"
          class="photo-item ng-flex ng-flex-center ng-align-center"
        >
          <image :src="item.url" mode="scaleToFill" />
        </view> -->
        <!-- <view class="photo-item ng-flex ng-flex-center ng-align-center"> -->
        <!-- <image
            class="add-img"
            src="/static/imgs/community/add-gray.svg"
            mode="scaleToFill"
          />
          <input type="file" /> -->
        <zh-upFile
          :config="config"
          background="/static/imgs/community/add-gray.svg"
          :type="1"
          :upFileType="2"
          width="154rpx"
          height="154rpx"
          @upLoadFile="upLoadFile"
          @fileListChange="fileListChange"
        ></zh-upFile>
        <!-- </view> -->
      </view>
    </add-modules>
  </view>
</template>

<script>
import AddModules from "ngcomponents/page/community/add/AddModules";
import zhUpFile from "@/components/zh-upFile";
export default {
  components: { AddModules, zhUpFile },
  props: {
    filterName: {
      type: String,
      default: "",
    },
    margin: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      config: {
        count: 1, // 上传图片张数
        sizeType: ["original", "compressed"], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ["album", "camera"], // album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
      },
      photo: [],
    };
  },
  methods: {
    upLoadFile({ tempFiles }) {
      console.log(tempFiles[0]);
      this.photo = [];
    },
    fileListChange({ fileList, removeList }) {
      this.photo = fileList;
      this.$emit("toggle", { type: "photo", value: fileList });
    },
  },
};
</script>

<style lang="scss" scoped>
.photo-box {
  width: 100%;
  .photo-item {
    width: 154rpx;
    height: 154rpx;
    border-radius: 8rpx;
    border: solid 1px $lineColor;
    position: relative;
    cursor: pointer;
    margin-bottom: 20rpx;
    .add-img {
      width: 44rpx;
      height: 44rpx;
    }
  }
}
</style>
