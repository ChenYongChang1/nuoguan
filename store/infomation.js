import axios from "axios";

const store = {
  namespaced: true,
  state: {
    nowPage: "index",
  },
  mutations: {
    SET_NOW_PAGE(state, path) {
      state.nowPage = path;
    },
  },
  getters: {},
  actions: {
    async getInfomationList({ commit }, opt) {
      const { tab = 0, page = 1, pageSize = 10 } = opt;
      const res = await axios.get(
        `/article.list?type=${tab}&page=${page}&page_size=${pageSize}`
      );
      return res.data;
    },
    async getInfomationDetail({ commit }, opt) {
      const { id } = opt;
      const res = await axios.get(
        `/article.detail?id=${id}`
      );
      return res.data;
    },
  },
};

export default store;
