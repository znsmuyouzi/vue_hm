<template>
  <div>
	 <mt-swipe :auto="5000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in list" :key="item.url">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>

	<ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		  <router-link to="/home/NewsList">
              <img src="../../lib/images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		  <router-link to="/home/photolist">
              <img src="../../lib/images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		  <router-link to="/home/goodslist">
              <img src="../../lib/images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../lib/images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../lib/images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../lib/images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul>

  </div>
</template>

<script>
	import { Toast } from "mint-ui";
	export default{
		data(){
			return{
				list:[
					{img:require("../../images/1.jpg")},
					{img:require("../../images/2.jpg")},
					{img:require("../../images/3.jpg")}
				]
			}
		},
		created(){
			//this.getlbt()
		},
		methods: {
// 			getlbt() {
// 				this.$http.get("http://vue.studyit.io/api/getlunbo").then((res)=>{
// 					console.log(result.body);
// 				},(err)=>{
// 					
// 				})
// 			}
		},
	}
</script>

<style scoped>
.mint-swipe{
	height: 200px;
}
.mint-swipe img {
	position: absolute;
	top: 0;
	left: 0;
    width: 100%;
    height: 100%;
	z-index: 1000;
    }
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
	  }
.mui-table-view img{
	width: 60px;
	height: 60px;
} 
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
