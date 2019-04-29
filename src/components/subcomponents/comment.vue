<template>
	<div class="cmt-contaitner">
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
		
		<div class="cmt-list">
		  <div class="cmt-item" v-for="(item, i) in list" :key="item.aid">
			<div class="cmt-title">
			  <span>第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.username }}</span>
			  <span>发表时间：{{times | dateFormat}}</span>
			</div>
			<div class="cmt-body">
			  {{item.title}}
			</div>
		  </div>
    </div>
		
		<mt-button type="danger" size="large" plain @click.prevent="loadMore">加载更多</mt-button>
	</div>
</template>

<script>
	export default{
        data(){
            return {                 
               list:[]  ,
               page:1, 
			   msg:[],
			   times:new Date()
            }
        },
		mounted(){

			 this.requestData();
		},
        methods:{

            loadMore() {                
               this.requestData();                
            },
            requestData(){
                

                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;   


                this.$http.get(api).then((response)=>{

                        this.list=this.list.concat(response.body.result);

                        ++this.page; 

                        
                },(err)=>{
                        console.log(err);
                })     

            },
			postComment(){
				if (this.msg.length === 0) {
					return alert("评论内容不能为空！");
					// return Toast("评论内容不能为空！");
				}
				
				var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;   
				
				
				    this.$http.get(api).then((response)=>{
							// content: this.msg.trim()
				            // this.list=this.list.concat(response.body.result);
							var cmt = {
								username:"匿名用户",
								title:this.msg
							}
							this.list.unshift(cmt);
							
							this.msg = ""
				            
				    },(err)=>{
				            console.log(err);
				    })     
				
				}
			}
        }
    
</script>

<style scoped>
	.cmt-contaitner h3{
		font-size: 18px;
	}
	.cmt-contaitner textarea{
		font-size: 14px;
		height: 85px;
		margin: 0;
	}
	.cmt-contaitner .cmt-list{
		margin: 5px 0;
	}
	.cmt-contaitner .cmt-list .cmt-item{
		font-size: 13px;
	}
	.cmt-contaitner .cmt-list .cmt-title{
		line-height: 30px;
        background-color: #ccc;
		display: flex;
		justify-content: space-between;
	}
	.cmt-contaitner .cmt-list .cmt-body{
		line-height: 35px;
        text-indent: 2em;
	}
	
</style>
