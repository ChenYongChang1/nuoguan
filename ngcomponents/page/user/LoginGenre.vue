<template>
  <view class="login">
    <view class="login-start">
      <view class="login-icon">
        <image src="/static/imgs/tabbar/index.png" mode="scaleToFill" />
      </view>
      <view class="login-title ng-text-center">创建用户分类</view>
      <view class="login-desc ng-text-center submit-message"
        >我们需要获取您的个人信息</view
      >
      <view>
        <view class="select-item ng-flex ng-flex-space ng-align-center">
          <vv-select
            v-model="filterData.first"
            placeholder="请选择所属类别"
            :list="positions"
            valueKey="value"
            label="label"
          ></vv-select>
          <div class="down">
            <image src="/static/imgs/user/todown.png" mode="scaleToFill" />
          </div>
        </view>
        <view class="select-item ng-flex ng-flex-space ng-align-center">
          <vv-select
            v-model="filterData.two"
            placeholder="请选择所属类别"
            :list="genreList"
            valueKey="value"
            label="label"
          ></vv-select>
          <div class="down">
            <image src="/static/imgs/user/todown.png" mode="scaleToFill" />
          </div>
        </view>
      </view>
      <view>
        <button
          class="login-btn submit-message margin-top-86"
          @tab="submitGenre"
        >
          提交
        </button>
      </view>
    </view>
    <view v-if="isSave" class="register-success ng-flex ng-flex-center">
      <view class="register-inner">
        <view class="title ng-text-center">注册成功</view>
        <view class="grade-img">
          <image src="/static/imgs/user/grade.png" mode="scaleToFill" />
        </view>
        <view class="grade-title ng-text-center">获取10积分</view>
        <view class="grade-title ng-text-center">前往设置完善个人信息</view>
        <button
          class="login-btn submit-message login-btn-small"
          @tap="continueSetting"
        >
          去设置
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import vvSelect from "components/vv-select/vv-select";
export default {
  components: { vvSelect },
  data() {
    return {
      filterData: {
        first: 0,
        two: 0,
      },
      isSave: true,
      positions: [
        {
          label: "电工技师",
          value: 0,
          children: [
            {
              label: "维修电工",
              value: 0,
            },
            {
              label: "物业电工",
              value: 1,
            },
            {
              label: "成套电工",
              value: 2,
            },
            {
              label: "家装电工",
              value: 3,
            },
            {
              label: "其他",
              value: 4,
            },
          ],
        },
        {
          label: "电气工程师",
          value: 1,
          children: [
            {
              label: "设计院",
              value: 0,
            },
            {
              label: "成套",
              value: 1,
            },
            {
              label: "其他",
              value: 2,
            },
          ],
        },
        {
          label: "其他",
          value: 2,
          children: [{ label: "其他", value: 0 }],
        },
      ],
    };
  },
  computed: {
    genreList() {
      const list =
        this.positions.find((item) => item.value === this.filterData.first) ||
        {};
      this.filterData.two = list.children[0].value;
      return list.children || [];
    },
  },
  methods: {
    submitGenre() {
      this.isSave = true;
      this.$emit("submitGenre", this.filterData);
    },
    continueSetting() {
      this.isSave = false;
      this.$emit("setStep", 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  .margin-top-86 {
    margin-top: 86rpx;
  }
  .login-btn {
    width: 440rpx;
    height: 72rpx;
    background: url("/static/imgs/infomation/btn.png");
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 72rpx;
  }
  .login-btn-small {
    width: 280rpx;
    height: 56rpx;
    line-height: 56rpx;
    margin-top: 10rpx;
  }
  .login-start {
    width: 100%;
    padding-top: 148rpx;
    .login-icon {
      width: 128rpx;
      height: 128rpx;
      margin: 0 auto 40rpx auto;
    }
    .login-title {
      width: 100%;
      height: 56rpx;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 56rpx;
      margin-bottom: 24rpx;
    }
    .login-desc {
      width: 100%;
      height: 40rpx;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 40rpx;
      margin-bottom: 68rpx;
    }
    .tour {
      width: 440rpx;
      height: 72rpx;
      border: solid 2rpx #979797;
      border-radius: 16rpx;
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 72rpx;
    }
  }
  .select-item {
    width: 440rpx;
    height: 72rpx;
    border: solid 2rpx #979797;
    border-radius: 16rpx;
    margin: 0 auto 40rpx auto;
    padding: 0 10rpx 0 30rpx;
    position: relative;
    .down {
      width: 48rpx;
      height: 48rpx;
      position: absolute;
      top: 12rpx;
      right: 10rpx;
      z-index: -1;
    }
  }
  .register-success {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $maskColor;
    .register-inner {
      width: 480rpx;
      height: 440rpx;
      background: #ffffff;
      border-radius: 16rpx;
      margin-top: 368rpx;
      padding: 40rpx 0 0 0;
      .title {
        width: 100%;
        height: 44rpx;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: $themeColor;
        line-height: 44rpx;
      }
      .grade-img {
        width: 108rpx;
        height: 108rpx;
        margin: 16rpx auto 20rpx auto;
      }
      .grade-title {
        width: 100%;
        height: 36rpx;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 36rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}
</style>
