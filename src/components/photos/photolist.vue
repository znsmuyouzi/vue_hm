<template>
<div>
	<!-- 顶部滑动区域 -->
	<div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="(item,i) in cates" :key="item.id" @click="imgclick(i)">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
		
	<!-- 图片列表区域	 -->
	<ul class="photo-list">
      <router-link v-for="item in list[aid]" :key="item.img_url" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
</div>
</template>

<script>
	// 导入mui.js文件
	import mui from "../../lib/mui/js/mui.min.js";
	
	export default{
		data(){
			return{
				cates:[
					{	id:0,
						title:"全部"},
					{	id:1,
						title:"b站"},
					{	id:2,
						title:"up主"},
					{	id:3,
						title:"跳舞"},
					{	id:4,
						title:"电竞"},
					{	id:5,
						title:"国漫"},
					
				],
				list:[
						[
								{	id:0,
									title:"制作图片列表区域",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/1/1.jpg")
								},
								{	id:0,
									title:"实现了 图片列表的 懒加载改造和 样式美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/1/2.jpg")
								},
								{	id:0,
									title:"实现了 点击图片 跳转到 图片详情页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/1/3.jpg")
								},
								{	id:0,
									title:"实现 详情页面的布局和美化，同时获取数据渲染页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/1/4.jpg")
								},
								{	id:0,
									title:"实现 图片详情中 缩略图的功能",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/1/5.jpg")
								},
								{	id:0,
									title:"绘制 商品列表 页面基本结构并美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/1/6.jpg")
								}
						],
						[
								{	id:1,
									title:"制作图片列表区域",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/2/1.jpg")
								},
								{	id:1,
									title:"实现了 图片列表的 懒加载改造和 样式美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/2/2.jpg")
								},
								{	id:1,
									title:"实现了 点击图片 跳转到 图片详情页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/2/3.jpg")
								},
								{	id:1,
									title:"实现 详情页面的布局和美化，同时获取数据渲染页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/2/4.jpg")
								},
								{	id:1,
									title:"实现 图片详情中 缩略图的功能",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/2/5.jpg")
								},
								{	id:1,
									title:"绘制 商品列表 页面基本结构并美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/2/6.jpg")
								}
						],
						[
								{	id:2,
									title:"制作图片列表区域",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/3/1.jpg")
								},
								{	id:2,
									title:"实现了 图片列表的 懒加载改造和 样式美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/3/2.jpg")
								},
								{	id:2,
									title:"实现了 点击图片 跳转到 图片详情页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/3/3.jpg")
								},
								{	id:2,
									title:"实现 详情页面的布局和美化，同时获取数据渲染页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/3/4.jpg")
								},
								{	id:2,
									title:"实现 图片详情中 缩略图的功能",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/3/5.jpg")
								},
								{	id:2,
									title:"绘制 商品列表 页面基本结构并美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/3/6.jpg")
								}
						],
						[
								{	id:3,
									title:"制作图片列表区域",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/4/1.jpg")
								},
								{	id:3,
									title:"实现了 图片列表的 懒加载改造和 样式美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/4/2.jpg")
								},
								{	id:3,
									title:"实现了 点击图片 跳转到 图片详情页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/4/3.jpg")
								},
								{	id:3,
									title:"实现 详情页面的布局和美化，同时获取数据渲染页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/4/4.jpg")
								},
								{	id:3,
									title:"实现 图片详情中 缩略图的功能",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/4/5.jpg")
								},
								{	id:3,
									title:"绘制 商品列表 页面基本结构并美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/4/6.jpg")
								}
						],
						[
								{	id:4,
									title:"制作图片列表区域",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/5/1.jpg")
								},
								{	id:4,
									title:"实现了 图片列表的 懒加载改造和 样式美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/5/2.jpg")
								},
								{	id:4,
									title:"实现了 点击图片 跳转到 图片详情页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/5/3.jpg")
								},
								{	id:4,
									title:"实现 详情页面的布局和美化，同时获取数据渲染页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/5/4.jpg")
								},
								{	id:4,
									title:"实现 图片详情中 缩略图的功能",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/5/5.jpg")
								},
								{	id:4,
									title:"绘制 商品列表 页面基本结构并美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/5/6.jpg")
								}
						],
						[
								{	id:5,
									title:"制作图片列表区域",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/6/1.jpg")
								},
								{	id:5,
									title:"实现了 图片列表的 懒加载改造和 样式美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/6/2.jpg")
								},
								{	id:5,
									title:"实现了 点击图片 跳转到 图片详情页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/6/3.jpg")
								},
								{	id:5,
									title:"实现 详情页面的布局和美化，同时获取数据渲染页面",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/6/4.jpg")
								},
								{	id:5,
									title:"实现 图片详情中 缩略图的功能",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/6/5.jpg")
								},
								{	id:5,
									title:"绘制 商品列表 页面基本结构并美化",
									zhaiyao:"图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据",
									img_url:require("../../images/photos/6/6.jpg")
								}
						]				
				],
				aid:0
			}
		},
		mounted() {
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			  });
		},
		methods:{
			imgclick(i){
				//console.log(i)
				this.aid = i;
			}
		}
	}
</script>

<style scoped="scoped">
	* {
		  touch-action: pan-y;
		}
	.photo-list{
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
	}
	.photo-list li{
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		position: relative;
	}
	.photo-list li img{
		width: 100%;
		vertical-align: middle;
	}
	.photo-list li img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
	.photo-list .info{
		color: white;
		text-align: left;
		position: absolute;
		bottom: 0;
		background-color: rgba(0,0,0,0.4);
		max-height: 84px;
	}
	.photo-list .info .info-title{
		font-size: 14px;
	}
	.photo-list .info .info-body{
		font-size: 13px;
	}
</style>
