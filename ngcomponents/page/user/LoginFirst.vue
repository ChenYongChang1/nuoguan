<template>
  <view class="login">
    <view class="login-start">
      <view class="login-icon">
        <image src="/static/imgs/tabbar/index.png" mode="scaleToFill" />
      </view>
      <view class="login-title ng-text-center">创建您的账号</view>
      <view class="login-desc ng-text-center">我们需要获取您的个人信息</view>
      <view>
        <button
          class="login-btn"
          form-type="submit"
          open-type="getUserInfo"
          bindgetuserinfo="getUserInfo"
          @getuserinfo="getuserinfo"
        >
          微信授权
        </button>
        <button class="tour">访客身份登陆</button>
      </view>
    </view>
    <view v-if="step === 1" class="login-phone ng-flex ng-flex-center">
      <view class="login-phone-inner">
        <view class="get-phone-title ng-text-center">诺冠</view>
        <view class="get-phone-desc ng-text-center"
          >申请获取您的微信绑定的手机号</view
        >
        <view class="get-phone-btn ng-flex">
          <button class="cancel" @tap="step = 0">取消</button>
          <button
            open-type="getPhoneNumber"
            class="auth"
            @getphonenumber="getPhoneNumber"
          >
            授权
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      sessionKey: "",
      userInfo: {},
    };
  },
  methods: {
    //   获取用户手机号
    async getPhoneNumber(e) {
      if (!e.target.iv) {
        uni.showModal({
          content: "获取手机号失败！",
          showCancel: false,
        });
        return;
      }
      const params = {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        sessionKey: this.sessionKey,
      };
      const responsePhone = await this.$store.dispatch(
        "user/getUserInfoPhone",
        params
      );
      this.$emit("setStep", 2);
      this.userInfo.phone = responsePhone.mobile;
      this.$store.commit("user/SET_USER_INFO", this.userInfo);
    },
    // 获取用户信息
    async getuserinfo() {
      if (this.userInfo.openId) {
        this.$emit("setStep", 1);
        return;
      }
      const res = await wx.login();
      // 获取sessionKey
      const response = await this.$store.dispatch("user/getAuthUser", {
        code: res.code,
      });
      if (response.session_key) {
        this.sessionKey = response.session_key;
        this.$emit("setStep", 1);
        this.$store.commit("SET_IDENTIFY", response.identify);
      }
      // 获取用户信息
      const userRes = await wx.getUserInfo();
      this.userInfo = {
        phone: "",
        openId: response.openid,
        ...userRes.userInfo,
      };
      // 给服务端
      const params = {
        encryptedData: userRes.encryptedData,
        iv: userRes.iv,
        sessionKey: this.sessionKey,
      };
      const resInfo = await this.$store.dispatch(
        "user/getUserInfoMation",
        params
      );
      this.$store.commit("SET_IDENTIFY", resInfo.identify);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
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
      margin-bottom: 168rpx;
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
      margin-bottom: 64rpx;
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
    .down {
      width: 48rpx;
      height: 48rpx;
    }
  }
  .login-phone {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: $maskColor;
    .login-phone-inner {
      width: 480rpx;
      height: 280rpx;
      background: #ffffff;
      border-radius: 16rpx;
      padding: 40rpx 44rpx 0 44rpx;
      margin-top: 368rpx;
      .get-phone-title {
        width: 100%;
        height: 44rpx;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 44rpx;
        margin-bottom: 40rpx;
      }
      .get-phone-desc {
        width: 100%;
        height: 74rpx;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 40rpx;
        border-bottom: solid 1px $lineColor;
      }
      .get-phone-btn {
        width: 100%;
        padding: 20rpx 0;
        button {
          &::after {
            border: none;
          }
          width: 50%;
          background: white;
          font-size: 14px;
          border: none;
          line-height: 48rpx;
        }
        .cancel {
          border-right: solid 1px $lineColor;
        }
        .auth {
          color: $themeColor;
        }
      }
    }
  }
}
</style>
