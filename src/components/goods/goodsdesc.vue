<template>
	<div class="newsinfo-container">
		<h3 class="title">{{list.title}}</h3>
		<p class="subtitle">
			<span>发表时间:{{times | dateFormat}}</span>
			<span>点击:{{list.aid}}次</span>
		</p>
		<hr>
		
		<div class="content" v-html="list.content"></div>
		
		<!-- 评论子组件区域 -->
		<comment-box></comment-box>
	</div>
</template>

<script>
	import comment from "../subcomponents/comment.vue";
	export default{
		data(){
			return{
				list:[],
				times:new Date()
				
			}
		},
		mounted(){
			var aid =parseInt(this.$route.params.id)+480;
			console.log(aid)
			 this.requestData(aid);
		},
		methods: {
			requestData(aid) {
				var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
				this.$http.get(api).then((res)=>{
					console.log(res);
					this.list = res.body.result[0]
				},(err)=>{
					console.log(err);
				})
			}
		},
		components: {
			// 用来注册子组件的节点
			"comment-box": comment
		  }
	}
</script>

<style>
	.newsinfo-container{
		padding: 0 4px;
	}
	.newsinfo-container .title{
		font-size: 16px;
		text-align: center;
		margin: 15px 0;
		color: red;
	}
	.newsinfo-container .subtitle{
		font-size: 13px;
		color: #226aff;
		display: flex;
		justify-content: space-between;
	}
	.newsinfo-container .content{
		padding: 3px;
		font-size: 16px;
	}
	.newsinfo-container .content font{
		text-align: center;
	}
	.newsinfo-container .content img{
		width: 100% !important;
		height: 100% !important;
	}
</style>
