<template>
	<div class="photoinfoz_container">
		<h3>图片列表</h3>
		<p class="sbbittle">
			<span>发表时间:{{times | dateFormat}}</span>
			<span>点击0次</span>
		</p>
		<hr>
		
		<!-- 缩略图 -->
		<div class="thumbs">
		  <img class="preview-img" v-for="(item, index) in list[aid]" :src="item.img_url" height="100" :key="item.img_url">
		</div>

		<!-- 图片内容区域 -->
		<div class="content">图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`,根据`lazy-load`的使用文档，尝试使用,渲染图片列表数据</div>
			
		<cmt-box></cmt-box>
	</div>
	
</template>

<script>
	import comment from "../subcomponents/comment.vue"
	export default{
		data(){
			return{
				aid:this.$route.params.id,
				times:new Date(),
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
			}
		},
		// created() {
		// 	this.getThumbs();
		//   },
		methods:{
			getThumbs() {
			var cmt  = {
					w : 600,
					h : 400
				}	 
			   
				this.list[this.aid].unshift(cmt);
			}
		},
		components:{
			"cmt-box": comment
		}
	}
</script>

<style scoped="scoped">
	.photoinfoz_container{
		padding: 3px;
	}
	.photoinfoz_container h3{
		text-align: center;
		font-size: 18px;
		color: #26A2FF;
		margin: 15px 0;
	}
	.photoinfoz_container .sbbittle{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
	}
	.photoinfoz_container .content{
		font-size: 13px;
		line-height: 30px;
	}
	 .thumbs img{
      margin: 10px;
      box-shadow: 0 0 8px #999;
	}
</style>
