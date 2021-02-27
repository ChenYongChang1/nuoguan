import Vue from "vue";
import App from "./App";

import store from "./store/index";
import FooterTabBar from "ngcomponents/layout/FooterTabBar";
import WxSwiper from "ngcomponents/base/WxSwiper";
import { strJoin, formatLocalTime } from "./common/util";
import axios from './axios'
Vue.config.productionTip = false;
Vue.component("tab-bar", FooterTabBar);
Vue.component("wx-swiper", WxSwiper);
App.mpType = "app";

Vue.prototype.$store = store;
Vue.prototype.$strJoin = strJoin;
Vue.prototype.$formatLocalTime = formatLocalTime;
Vue.prototype.$axios = axios
const app = new Vue({
  store,
  ...App,
});
app.$mount();
