import Vue from "vue";
import Vuex from "vuex";
import infomation from "./infomation";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    infomation,
  },
  state: {
    nowPage: "index",
  },
  mutations: {
    SET_NOW_PAGE(state, path) {
      state.nowPage = path;
    },
  },
  getters: {},
  actions: {},
});

export default store;
