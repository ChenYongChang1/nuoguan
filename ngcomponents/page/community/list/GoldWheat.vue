<template>
  <view>
    <view class="glod-color" :style="{ margin }">
      <view class="glod-list">
        <view class="topic-title">金麦榜</view>
        <view class="glod-list-table ng-flex">
          <view
            v-for="item in userList"
            :key="item.id"
            class="glod-item"
            @click="getUserArticle(item)"
          >
            <view class="glod-cover">
              <image :src="item.src" alt=""></image>
            </view>
            <view class="glod-name ng-text-center">{{ item.name }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="glod-user ng-flex" :class="showUserCard">
      <view class="user-big-cover">
        <image src="/static/imgs/1@2x.png" mode="scaleToFill" />
      </view>
      <view class="user-info">
        <view class="name"> stwen </view>
        <view class="positions">高级技工、高级培训师</view>
        <view class="all-positions">
          上海某高校专业教师。高级培训师、工程师、南车电器安全技术培训师
        </view>
      </view>
    </view>
    <view class="community-article" :class="showUserCard">
      <community-item
        v-for="(item, index) in list"
        :key="$strJoin('community-', index)"
      ></community-item>
    </view>
  </view>
</template>

<script>
import CommunityItem from "ngcomponents/page/community/CommunityItem";
export default {
  props: {
    margin: {
      type: String,
      default: "0",
    },
  },
  components: { CommunityItem },
  data() {
    return {
      list: [1, 2, 3, 4],
      userList: [
        { name: "111", src: "/static/imgs/comment/banner.png", id: 1 },
        { name: "222", src: "/static/imgs/comment/banner.png", id: 2 },
        { name: "333", src: "/static/imgs/comment/banner.png", id: 3 },
        { name: "444", src: "/static/imgs/comment/banner.png", id: 4 },
        { name: "555", src: "/static/imgs/comment/banner.png", id: 5 },
      ],
      filterData: {
        user: "",
      },
    };
  },
  computed: {
    showUserCard() {
      return this.filterData.user ? "show-card" : "";
    },
  },
  methods: {
    getUserArticle(row) {
      if (this.filterData.user === row.id) {
        this.filterData.user = "";
      } else {
        this.filterData.user = row.id;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.glod-color {
  width: 100%;
  padding: 0 18rpx;
  .glod-list {
    width: 100%;
    border-radius: 8rpx;
    .glod-list-table {
      width: 100%;
      margin: 24rpx 0;
      padding: 0 24rpx;
      .glod-item {
        width: 96rpx;
        height: 136rpx;
        margin-right: 48rpx;
        .glod-cover {
          width: 96rpx;
          height: 96rpx;
          border-radius: 50%;
          overflow: hidden;
        }
        .glod-name {
          width: 100%;
          height: 36rpx;
          font-size: 13px;
          font-weight: 400;
          color: #000000;
          line-height: 36rpx;
          margin-top: 10rpx;
        }
      }
      .glod-item:last-child {
        margin-right: 0;
      }
    }
  }
}
.glod-user {
  width: 100%;
  height: 302rpx;
  background: url("/static/imgs/comment/user-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 46rpx 40rpx 0 40rpx;
  opacity: 0;
  transition: opacity .3s ease;
  position: relative;
  z-index: 0;
  .user-big-cover {
    width: 108rpx;
    height: 108rpx;
    border-radius: 50%;
    padding: 2rpx;
    background: white;
    margin: 10rpx 30rpx 0 0;
    > image {
      border-radius: 50%;
    }
  }
  .user-info {
    width: 484rpx;
    .name {
      width: 100%;
      height: 50rpx;
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      line-height: 50rpx;
      margin-bottom: 12rpx;
    }
    .positions {
      width: 100%;
      height: 32rpx;
      font-size: 22rpx;
      font-weight: 400;
      color: $themeColor;
      line-height: 32rpx;
      margin-bottom: 24rpx;
    }
    .all-positions {
      width: 100%;
      height: 72rpx;
      font-size: 22rpx;
      font-weight: 400;
      color: #000000;
      line-height: 36rpx;
    }
  }
}
.glod-user.show-card {
  opacity: 1;
}
.community-article {
  width: 100%;
  padding: 0 18rpx;
  margin-top: -294rpx;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}
.community-article.show-card {
  margin-top: -48rpx;
}
</style>
