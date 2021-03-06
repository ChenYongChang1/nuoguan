import axios from "axios";

const store = {
  namespaced: true,
  state: {
    userInfo: {},
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
      uni.setStorage({
        key: "userInfo",
        data: JSON.stringify(userInfo),
      });
    },
  },
  getters: {},
  actions: {
    /**
     * auth登陆验证
     */
    async getAuthUser({ commit }, opt) {
      const { code = "" } = opt;
      const res = await axios.post("/auth/v1/wx.login", { code });
      console.log(res, "user");
      return res.data;
    },
    /**
     * auth获取用户信息
     */
    async getUserInfoMation({ commit }, opt) {
      const { sessionKey = "", iv = "", encryptedData = "" } = opt;
      const res = await axios.post("/auth/v1/user.info", {
        session_key: sessionKey,
        encrypted_data: encryptedData,
        iv,
      });
      return res.data;
    },
    /**
     * auth获取用户信息
     */
    async getUserInfoPhone({ commit }, opt) {
      const { sessionKey = "", iv = "", encryptedData = "" } = opt;
      const res = await axios.post("/auth/v1/user.phone", {
        session_key: sessionKey,
        encrypted_data: encryptedData,
        iv,
      });
      return res.data;
    },
  },
};

export default store;
