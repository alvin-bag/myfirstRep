import Vue from "Vue";
import App from "../src/App.vue";
import router from "./router.js";
import VueRouter from "vue-router";

import {Header} from "mint-ui";
import "mint-ui/lib/header/style.css";
Vue.component(Header.name,Header);
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
Vue.use(VueRouter);

console.log('succced')
var vm = new Vue({
    el:"#app",
    render:c=>c(App),
    router
})