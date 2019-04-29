<template>
	<div>
		<!-- <ul class="mui-table-view">
		  <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
			<router-link :to="'/home/newsinfo/' + item.id">
			  <img class="mui-media-object mui-pull-left" :src="item.img_url">
			  <div class="mui-media-body">
				<h1>{{ item.title }}</h1>
				<p class='mui-ellipsis'>
				  <span>发表时间：{{ item.add_time | dateFormat }}</span>
				  <span>点击：{{item.click}}次</span>
				</p>
			  </div>
			</router-link>
		  </li>
		</ul> -->
		<ul class="mui-table-view">
		  <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.aid">
			<router-link :to="'/home/NewsList/NewsInfo/' + item.aid">
			  <img class="mui-media-object mui-pull-left" src="../../lib/images/1.jpg">
			  <div class="mui-media-body">
				<h1>{{item.title}}</h1>
				<p class='mui-ellipsis'>
				  <span>发表时间：{{times | dateFormat}}</span>
				  <span>点击：{{item.aid}}次</span>
				</p>
			  </div>
			</router-link>
		  </li>
		</ul>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				list:[],			
				 times:new Date()
			}
		},
		methods: {
			newsdata() {
				var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
				this.$http.jsonp(api).then((res)=>{
					console.log(res);
					this.list = res.body.result;
				},(err)=>{
					console.log(err);
				}) 
			}
		},
		mounted(){
			this.newsdata()
		}
	}
</script>

<style scoped>
	.mui-table-view li h1{
		font-size: 14px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.mui-table-view li .mui-ellipsis{
		font-size: 12px;
		color: #226aff;
		display: flex;
		justify-content: space-between;
	}
</style>
