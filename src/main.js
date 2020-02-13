import Vue from "Vue";
import App from "../src/App.vue";
import router from "./router.js";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import {Header,Swipe,SwipeItem} from "mint-ui";
import "mint-ui/lib/header/style.css";
import "mint-ui/lib/swipe/style.css";
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);


var vm = new Vue({
    el:"#app",
    render:c=>c(App),
    router
})