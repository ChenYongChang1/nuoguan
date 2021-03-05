const urlConfig = "https://ng.wwwmoban.com/xcx";

const axios = {
  async get(url, header) {
    return new Promise((reslove, reject) => {
      uni.request({
        url: urlConfig + url,
        data: {},
        header,
        method: "GET",
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          reslove(data);
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  },
  async post(url, data, header) {
    return new Promise((reslove, reject) => {
      uni.request({
        url: urlConfig + url,
        data: data,
        header: header,
        method: "POST",
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          reslove(data);
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  },
};

export default axios;
