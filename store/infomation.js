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
    async getArticleGenre(){
      const res = await axios.get(`/article.category`)
      return res.data
    },
    // 获取文章列表
    async getInfomationList({ commit }, opt) {
      const { tab = 0, word, page = 1, pageSize = 10 } = opt;
      const res = await axios.get(
        `/article.list?word=${word}&cat_id=${tab}&page=${page}&page_size=${pageSize}`
      );
      return res.data;
    },
    // 获取文章详情
    async getInfomationDetail({ commit }, opt) {
      const { id } = opt;
      const res = await axios.get(`/article.detail?id=${id}`);
      return res.data;
    },
  },
};

export default store;
