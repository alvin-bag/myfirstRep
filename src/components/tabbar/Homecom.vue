<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiperlist" :key="item.url">
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1" />
          <div class="mui-media-body">天猫</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1" />

          <div class="mui-media-body">聚财</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1" />

          <div class="mui-media-body">充值中心</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1" />

          <div class="mui-media-body">酒店旅游</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1" />

          <div class="mui-media-body">全球通</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1" />

          <div class="mui-media-body">购物中心</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      swiperlist: [
        { img: "x", url: "../src/images/x.webp" },
        { img: "m", url: "../src/images/mm_12852562_1778064_13670999.jpg" },
        { img: "h", url: "../src/images/mm_12852562_1778064_13674396.jpg" }
      ]
    };
  },
  created() {
    this.getSwipe();
  },
  methods: {
    getSwipe() {
       
      Toast({ message: "加载成功", position: "middle" });
    }
  }
};
</script>
<style scoped>
div .mint-swipe {
  height: 200px;
  width: 100%;
}

.mint-swipe-item img {
  display: block;
  width: 100%;
  height: 100%;
}
.mui-grid-view .mui-grid-9{
    background-color: #fff;
    border: none;
}
.mui-table-view-cell {
  border: none!important;
}
.mui-table-view-cell img {
  display: block;
  width: 100%;
}
</style>