<template>
	<div class="goods_info">
		
		<transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
		
		<!-- 商品轮播图 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
						<mt-swipe :auto="5000">
						  <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
						  <mt-swipe-item v-for="item in list" :key="item.url">
						    <img :src="item.url">
						  </mt-swipe-item>
						</mt-swipe>
				</div>
			</div>
		</div>
		
		<!-- 商品购买列表 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<del>￥999</del>&nbsp;&nbsp;销售价：<span class="now_price">￥899</span>
					  </p>
					  <p>购买数量：<numbox></numbox></p>
					  <p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
						<!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
						<!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
						<!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
						<!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
						<!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
					  </p>
				</div>
			</div>
		</div>
		
		<!-- 商品参数区域 -->
		<div class="mui-card">
		  <div class="mui-card-header">商品参数</div>
		  <div class="mui-card-content">
			<div class="mui-card-content-inner">
			  <p>商品货号：{{times}}</p>
			  <p>库存情况：60件</p>
			  <p>上架时间：{{ times | dateFormat }}</p>
			</div>
		  </div>
		  <div class="mui-card-footer">
		<!-- 	<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button> -->
			<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
		  </div>
		</div>
	</div>
</template>

<script>
	import numbox from "../subcomponents/goods_numbox.vue";
	export default{
		data(){
			return{
				id:this.$route.params.id,
				ballFlag: false,
				timer: '',
				list:[
							{
								url:require("../../images/photos/1/1.jpg")
							},
							{
								url:require("../../images/photos/1/2.jpg")
							},
							{
								url:require("../../images/photos/1/3.jpg")
							},
							{
								url:require("../../images/photos/1/4.jpg")
							},
							{
								url:require("../../images/photos/1/5.jpg")
							},
				],
				times:new Date()
			}
		},
		components: {
			numbox
		},
		mounted() {
			this.timer = setInterval(this.addToShopCar, 1000);
		},
		 beforeDestroy() {
		  clearInterval(this.timer);
		},
		methods:{
			// goDesc(id){
			// 	//this.$router.push({ name: "goodscomment", params: { id } });
			// },
			goComment(id){
				
				this.$router.push({ name: "goodsdesc", params: { id } });
			},
			addToShopCar() {
			  // 添加到购物车
			  this.ballFlag = !this.ballFlag;
			  
			  // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
			  // 拼接出一个，要保存到 store 中 car 数组里的 商品信息对象
			 //  var goodsinfo = {
				// count: 1,
			 //  };
			 //  // 调用 store 中的 mutations 来将商品加入购物车
			  this.$store.commit("addToCar");
			},
			beforeEnter(el) {
			  el.style.transform = "translate(0, 0)";
			},
			enter(el, done) {
			  el.offsetWidth;

			  // 小球动画优化思路：
			  // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
			  // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
			  // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
			  // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
			  // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

			  // 获取小球的 在页面中的位置
			  const ballPosition = this.$refs.ball.getBoundingClientRect();
			  // 获取 徽标 在页面中的位置
			  const badgePosition = document
				.getElementById("badge")
				.getBoundingClientRect();

			  const xDist = badgePosition.left - ballPosition.left;
			  const yDist = badgePosition.top - ballPosition.top;

			  el.style.transform = `translate(${xDist}px, ${yDist}px)`;
			  el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
			  done();
			},
			afterEnter(el) {
			  this.ballFlag = !this.ballFlag;
			},
		}
	}
</script>

<style scoped="scoped">
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe img {
		position: absolute;
		top: 0;
		left: 0;
	    width: 100%;
	    height: 100%;
		z-index: 10;
	    }
	.goods_info {
	  background-color: #eee;
	  overflow: hidden;
	}
	.goods_info .now_price {
		color: red;
		font-size: 16px;
		font-weight: bold;
	  }

	.goods_info .mui-card-footer {
		display: block;
		
	  }
	.mui-card-footer button {
			  margin: 15px 0;
	}
	.goods_info .ball {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		z-index: 99;
		top: 347px;
		left: 147px;
		opacity: 1 !important;
	  }
	
</style>
