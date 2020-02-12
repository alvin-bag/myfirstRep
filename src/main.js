import Vue from "Vue";
import App from "../src/App.vue";
import router from "./router.js";
import {Header} from "mint-ui";
import "mint-ui/lib/header/style.css";
Vue.component(Header.name,Header);
import "./lib/mui/css/mui.css"
console.log('succced')
var vm = new Vue({
    el:"#app",
    render:c=>c(App),
    router
})