<template>
  <view>
    <view class="user-info">
      <view class="user-cover">
        <view class="infomation">
          <view class="edit-user">
            <image src="/static/imgs/user/edit.png" mode="scaleToFill" />
            <view class="sign-up ng-text-center">签到</view>
          </view>
          <view class="cover">
            <image
              v-if="userInfo.avatarUrl"
              :src="userInfo.avatarUrl"
              mode="scaleToFill"
            />
            <button
              v-else
              class="login-btn"
              form-type="submit"
              open-type="getUserInfo"
              bindgetuserinfo="getUserInfo"
              @getuserinfo="getuserinfo"
            ></button>
          </view>
          <view class="cover-name ng-text-center">{{
            userInfo.nickName || "请先登陆"
          }}</view>
          <view class="line"></view>
          <view class="info-message ng-flex">
            <view class="level">
              <view class="num ng-text-center">1</view>
              <view class="desc-num ng-text-center">等级</view>
            </view>
            <view class="level no-border-right">
              <view class="num ng-text-center">1345</view>
              <view class="desc-num ng-text-center">积分</view>
            </view>
          </view>
        </view>
      </view>
      <view class="user-menu">
        <navigator
          v-for="item in menu"
          :key="item.src"
          :url="item.url"
          open-type="navigate"
        >
          <view class="menu-item ng-flex ng-flex-space ng-align-center">
            <view class="menu-name ng-flex ng-align-center">
              <image
                :src="$strJoin('/static/imgs/user/', item.src)"
                mode="scaleToFill"
              />
              <text>{{ item.name }}</text>
            </view>
            <image
              class="right-come"
              src="/static/imgs/user/right.png"
              mode="scaleToFill"
            />
          </view>
        </navigator>
      </view>
    </view>
    <tab-bar></tab-bar>
  </view>
</template>

<script>
export default {
  onShow() {
    this.$store.commit("SET_NOW_PAGE", "my");
  },
  data() {
    return {
      menu: [
        { name: "积分规则", src: "jifen.png", url: "/pages/user/usercenter" },
        {
          name: "等级特权中心",
          src: "dengji.png",
          url: "/pages/user/usercenter",
        },
        { name: "我的问答", src: "wenda.png", url: "/pages/user/usercenter" },
        { name: "我的足迹", src: "zuji.png", url: "/pages/user/usercenter" },
        { name: "我的下载", src: "down.png", url: "/pages/user/usercenter" },
        {
          name: "个人资料设置",
          src: "seting.png",
          url: "/pages/user/usercenter",
        },
      ],
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    getuserinfo() {
      const _this = this;
      // wx登录
      wx.login({
        success(res) {
          console.log(res);
          if (res.code) {
            //发起网络请求
            var code = res.code;
            // 获取微信用户信息
            wx.getUserInfo({
              success: function (res) {
                const userInfo = res.userInfo;
                _this.$store.commit("SET_USER_MESSAGE", userInfo);
                console.log(userInfo);
                // var nickName = userInfo.nickName;
                // var avatarUrl = userInfo.avatarUrl;
                // var gender = userInfo.gender; //性别 0：未知、1：男、2：女
                // var province = userInfo.province;
                // var city = userInfo.city;
                // var country = userInfo.country;
              },
              fail: (res) => {
                // 获取失败的去引导用户授权
              },
            });
          } else {
          }
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  width: 100%;
  min-height: 100vh;
  background: $bodyBg;
  .user-cover {
    width: 100%;
    height: 440rpx;
    background: linear-gradient(180deg, #ef534e 0%, #da0034 100%);
    padding: 30rpx 40rpx;
    .infomation {
      width: 100%;
      position: relative;
      .edit-user {
        width: 60rpx;
        height: 90rpx;
        position: absolute;
        right: 0;
        top: 0;
        > .sign-up {
          width: 60rpx;
          height: 28rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: #ffffff;
          line-height: 28rpx;
        }
        > image {
          margin: auto;
          width: 48rpx;
          height: 48rpx;
        }
      }
      .cover {
        width: 152rpx;
        height: 152rpx;
        padding: 12rpx;
        border-radius: 50%;
        background: rgba($color: #fff, $alpha: 0.5);
        margin: 0 auto 20rpx auto;
        position: relative;
        .login-btn {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        > image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .cover-name {
        width: 100%;
        height: 44rpx;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 44rpx;
        margin-bottom: 44rpx;
      }
      .line {
        width: 100%;
        height: 2rpx;
        background: rgba($color: #fff, $alpha: 0.4);
      }
      .info-message {
        width: 100%;
        padding: 15rpx 0;
        .level {
          width: 100%;
          height: 100rpx;
          border-right: solid 1px rgba($color: #fff, $alpha: 0.4);
          padding: 8rpx;
          .num {
            width: 100%;
            height: 44rpx;
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
            line-height: 44rpx;
            margin-bottom: 8rpx;
          }
          .desc-num {
            width: 100%;
            height: 34rpx;
            font-size: 12px;
            font-weight: 400;
            color: rgba($color: #fff, $alpha: 0.7);
            line-height: 34rpx;
          }
        }
        .no-border-right {
          border-right: none;
        }
      }
    }
  }
  .user-menu {
    width: 714rpx;
    min-height: calc(100vh - 680rpx);
    margin: 36rpx auto;
    background: url("/static/imgs/user/mask.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .menu-item {
      width: 100%;
      height: 96rpx;
      padding: 0 26rpx;
      border-bottom: solid 1px $lineColor;
      .menu-name {
        > image {
          width: 48rpx;
          height: 48rpx;
          margin-right: 28rpx;
        }
        > text {
          height: 42rpx;
          font-size: 15px;
          font-weight: 400;
          color: #000000;
          line-height: 42rpx;
        }
      }
      .right-come {
        width: 40rpx;
        height: 40rpx;
      }
    }
  }
}
</style>
