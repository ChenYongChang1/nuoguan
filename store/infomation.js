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
    // 获取文章分类
    async getArticleGenre() {
      const res = await axios.get(`/article/v1/category`);
      return res.data;
    },
    // 获取文章列表
    async getInfomationList({ commit }, opt) {
      const { tab = 0, word, page = 1, pageSize = 10 } = opt;
      const res = await axios.get(
        `/article/v1/list?keyword=${word}&cat_id=${tab}&page=${page}&page_size=${pageSize}`
      );
      return res.data;
    },
    // 获取文章详情
    async getInfomationDetail({ commit }, opt) {
      const { id } = opt;
      const res = await axios.get(`/article/v1/detail?id=${id}`);
      return res.data;
    },
    // 点赞或者取消点赞
    async articleThumbsUp({ commit }, opt) {
      const { id } = opt;
      const res = await axios.post(`/article/v1/praise`, { id });
      return res.data;
    },
  },
};

export default store;
