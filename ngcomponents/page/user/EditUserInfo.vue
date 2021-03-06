<template>
  <view class="edit-user">
    <birth-time
      :class="{ active: showTime }"
      @confirm="confirm"
      @cancel="showTime = false"
    ></birth-time>
    <view
      class="user-head ng-flex ng-flex-center ng-flex-column ng-align-center"
    >
      <view class="head-img">
        <image :src="userInfo.avatarUrl" mode="scaleToFill" />
      </view>
      <view class="user-name ng-text-center">{{ userInfo.nickName }}</view>
    </view>
    <view class="user-info-box">
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">姓名：</view>
        <view class="value">
          <input type="text" v-model="editUserInfo.nickName" />
        </view>
      </view>
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">职务：</view>
        <view class="value ng-flex ng-flex-space">
          <view class="ng-flex">
            <view>电工技师</view>
            <image
              class="right"
              src="/static/imgs/user/right.png"
              mode="scaleToFill"
            />
            <view>维修电工</view>
          </view>
          <view class="edit">修改职务</view>
        </view>
      </view>
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">手机号：</view>
        <view class="value ng-flex ng-flex-space">
          <view class="ng-flex">
            {{ editUserInfo.phone }}
          </view>
          <view class="edit">修改手机号</view>
        </view>
      </view>
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">性别：</view>
        <view class="value ng-flex">
          <view class="ng-flex sex" @tap="editUserInfo.gender = 1">
            男
            <image
              :src="`/static/imgs/user/${
                editUserInfo.gender === 1 ? 'check.png' : 'nocheck.png'
              }`"
              mode="scaleToFill"
            />
          </view>
          <view class="ng-flex sex" @tap="editUserInfo.gender = 2">
            女
            <image
              :src="`/static/imgs/user/${
                editUserInfo.gender === 2 ? 'check.png' : 'nocheck.png'
              }`"
              mode="scaleToFill"
            />
          </view>
        </view>
      </view>
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">生日：</view>
        <view class="value ng-flex ng-flex-space" @tap="showTime = true">
          {{ editUserInfo.birthday || "请选择生日" }}
        </view>
      </view>
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">公司：</view>
        <view class="value">
          <input
            type="text"
            v-model="editUserInfo.company"
            placeholder="请输入公司名称"
          />
        </view>
      </view>
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">所在地区：</view>
        <view class="value">
          <picker-address @change="change">
            {{ editUserInfo.position || "请选择地区" }}
          </picker-address>
        </view>
      </view>
      <view class="user-info-item ng-flex ng-flex-start ng-align-center">
        <view class="label">详细地址：</view>
        <view class="value">
          <input
            type="text"
            v-model="editUserInfo.morePosition"
            placeholder="请输入详细地址"
          />
        </view>
      </view>
    </view>
    <view class="save ng-text-center" @tap="saveAll"> 确认保存 </view>
  </view>
</template>

<script>
import birthTime from "components/birth-date-plug/index";
import pickerAddress from "components/wangding-pickerAddress/wangding-pickerAddress";
export default {
  components: { birthTime, pickerAddress },
  data() {
    return {
      showTime: false,
      initData: {
        birthday: "",
        position: "",
        morePosition: "",
        company: "",
      },
      editUserInfo: {},
    };
  },
  computed: {
    times() {
      return new Date().getTime();
    },
    userInfo() {
      return this.$store.state.user.userInfo;
    },
  },
  mounted() {
    console.log(this.userInfo);
    this.editUserInfo = JSON.parse(
      JSON.stringify({ ...this.userInfo, ...this.initData })
    );
  },
  methods: {
    saveAll() {
      this.$store.commit("user/SET_USER_INFO", this.editUserInfo);
      this.$goPath('/pages/index/index', 2)
    },
    change({ data }) {
      //   console.log(e);
      this.editUserInfo.position = data + "";
    },
    confirm(date) {
      this.editUserInfo.birthday = date;
      this.showTime = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-head {
  width: 100%;
  height: 300rpx;
  background: url("/static/imgs/user/edit-user.png");
  background-repeat: no-repeat;
  background-size: cover;
  .head-img {
    width: 144rpx;
    height: 144rpx;
    padding: 12rpx;
    border-radius: 50%;
    background: rgba($color: #ffffff, $alpha: 0.5);
    margin: 0 auto 20rpx auto;
    > image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .user-name {
    width: 100%;
    height: 44rpx;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 44rpx;
  }
}
.user-info-box {
  width: 100%;
  padding: 0 40rpx;
  .user-info-item {
    width: 100%;
    height: 108rpx;
    border-bottom: solid 1px $lineColor;
    .label {
      width: 140rpx;
      height: 40rpx;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 40rpx;
      margin-right: 20rpx;
    }
    .value {
      width: 510rpx;
      font-size: 14px;
      input {
        font-size: 14px;
      }
      .right {
        width: 40rpx;
        height: 40rpx;
        margin: 0 20rpx;
      }
      .edit {
        color: $themeColor;
      }
      .sex {
        color: $themeColor;
        margin-right: 48rpx;
        > image {
          width: 48rpx;
          height: 48rpx;
        }
      }
    }
  }
}
.save {
  cursor: pointer;
  width: 440rpx;
  height: 72rpx;
  margin: 68rpx auto 0 auto;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 72rpx;
  background: $themeColor;
  border-radius: 16rpx;
}
</style>
