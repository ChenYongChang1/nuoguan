import axios from "axios";

const store = {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    // 上传文件
    async uploadFile({ commit }, opt = {}) {
      const { file } = opt;
      const res = await axios.post("/common/v1/upload.file", { file });
      return res.data
    },
  },
};

export default store;
