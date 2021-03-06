import axios from "./common/uni-request/index";
import store from "./store/index";
const urlConfig = "https://ng.wwwmoban.com/xcx";

const whiteUrl = ["/auth/v1/wx.login"];

// 全局配置
axios.defaults.baseURL = urlConfig;

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    const URLAll = config.url.replace(urlConfig, "");
    const [url] = URLAll.split("?");
    console.log(`当前请求 ${url}`);
    // if (whiteUrl.every((item) => item !== url)) {
    const identify = store.state.identify;
    if (config.method === "post") {
      config.data.identify = identify;
      config.data.platform = 'xcx';
    } else if (config.method === "get") {
      if (config.url.indexOf("?") > -1) {
        config.url = `${config.url}&identify=${identify}&platform=xcx`;
      } else {
        config.url = `${config.url}?identify=${identify}&platform=xcx`;
      }
      // config.data.identify = store.state.identify;
    }
    // config.headers.identify = store.state.identify;
    // }

    //配置基本信息
    return config;
  },
  (err) => {
    console.log("请求失败");
    return Promise.reject(err);
  }
);

// 响应拦截
axios.interceptors.response.use((response) => {
  return response.data;
});
// const axios = {
//   async get(url, header) {
//     return new Promise((reslove, reject) => {
//       uni.request({
//         url: urlConfig + url,
//         data: {},
//         header,
//         method: "GET",
//         sslVerify: true,
//         success: ({ data, statusCode, header }) => {
//           reslove(data);
//         },
//         fail: (error) => {
//           reject(error);
//         },
//       });
//     });
//   },
//   async post(url, data, header) {
//     return new Promise((reslove, reject) => {
//       uni.request({
//         url: urlConfig + url,
//         data: data,
//         header: header,
//         method: "POST",
//         sslVerify: true,
//         success: ({ data, statusCode, header }) => {
//           reslove(data);
//         },
//         fail: (error) => {
//           reject(error);
//         },
//       });
//     });
//   },
// };

export default axios;
