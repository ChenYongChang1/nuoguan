import axios from "axios";

const store = {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    // #获取标签
    async getCommunityTags({ commit }) {
      const res = await axios.post(`/community/v1/tags`, {});
      return res.data;
    },
    // 获取文章帖子列表
    async getCmyArticleList({ commit }, opt) {
      const res = await axios.post("/community/v1/content.list", {});
      return res.data;
    },
    // 获取文章详情
    async getCmyArticleInfo({ commit }, opt) {
      const { id } = opt;
      const res = await axios.post("/community/v1/content.detail", { id });
      return res.data
    },
    // 发帖
    async publishArticle({ commit }, opt = {}) {
      const { id, tag, title, content } = opt;
      const res = await axios.post("/community/v1/content.publish", {
        tag_value_id: id,
        tag_value_name: tag,
        title,
        content,
      });
      return res.data;
    },
  },
};

export default store;
