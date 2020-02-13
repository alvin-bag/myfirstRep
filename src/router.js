import Vue from "Vue";
import VueRouter from "vue-router";
import Home from "E:/项目案例/store/src/components/tabbar/Homecom.vue"
import Member from "./components/tabbar/Membercom.vue"
import Shopcar from "./components/tabbar/Shopcarcom.vue"
import Search from "./components/tabbar/Searchcom.vue"
Vue.use(VueRouter);
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {
            path:"/home",component:Home
        },{
            path:"/member",component:Member
        },{
            path:"/shopcar",component:Shopcar

        },{
            path:"/search",component:Search

        }
    ],
    linkActiveClass:"mui-active"
})
export default router