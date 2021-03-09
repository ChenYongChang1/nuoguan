import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import infomation from "./infomation";
import community from "./community";
import base from "./base";
import user from "./user";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    infomation,
    community,
    base,
  },
  state: {
    identify: "",
    nowPage: "index",
  },
  mutations: {
    SET_IDENTIFY(state, identify) {
      state.identify = identify;
      uni.setStorage({
        key: "_IDENTIFY",
        data: identify,
      });
    },
    // SET_USER_MESSAGE(state, user) {
    //   state.userInfo = user;
    //   uni.setStorageSync("userInfo", JSON.stringify(user));
    // },
    SET_NOW_PAGE(state, path) {
      state.nowPage = path;
    },
  },
  getters: {},
  actions: {
    // 获取首页的tabbar
    async getMenuTabbar() {
      const res = await axios.get("/menu/v1/config");
      console.log(res);
    },
  },
});

export default store;
