<template>
	<div class="good_list">
		<router-link class="goods_item" v-for="item in list" :key = "item.id" :to = "'/home/goodsinfo/'+item.id">
			<img :src="item.url">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">¥:{{item.now}}</span>
					<span class="old">¥:{{item.old}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩99件</span>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
							{	id:0,
								title:"制作图片列表区域",
								now:899,
								old:999,
								url:require("../../images/photos/1/1.jpg")
							},
							{	id:1,
								title:"实现了 图片列表的 懒加载改造和 样式美化",
								now:899,
								old:999,
								url:require("../../images/photos/1/2.jpg")
							},
							{	id:2,
								title:"实现了 点击图片 跳转到 图片详情页面",
								now:899,
								old:999,
								url:require("../../images/photos/1/3.jpg")
							},
							{	id:3,
								title:"实现详情页面的布局和美化，同时获取数据,渲染页面懒加载改造和 样式美化",
								now:899,
								old:999,
								url:require("../../images/photos/1/4.jpg")
							},
							{	id:4,
								title:"实现 图片详情中 缩略图的功能",
								now:899,
								old:999,
								url:require("../../images/photos/1/5.jpg")
							},
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.good_list{
		display: flex;
		flex-wrap: wrap;
		padding: 7px;
		justify-content: space-between;
	}
	.good_list .goods_item{
		width: 49%;
		border: 1px solid #ccc;
		box-shadow: 0 0 8px #ccc;
		margin: 4px 0;
		padding: 2px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 220px;
	}
	.good_list .goods_item img{
		width: 100%;
	}
	.good_list .goods_item .title{
		font-size: 14px;
	}
	.good_list .goods_item .info{
		background-color: #eee;
	}
	.good_list .goods_item .info p{
		margin: 0;
		padding: 5px;
	}
	.goods_item .info .price .now{
		color: red;
		font-weight: 12px;
		font-size: 18px;
	}
	.goods_item .info .price .old{
		text-decoration: line-through;
		font-size: 16px;
		margin-left: 30px;
	}
	.goods_item .info .sell{
		display: flex;
		justify-content: space-between;
		font-size: 14px;
	}
</style>
