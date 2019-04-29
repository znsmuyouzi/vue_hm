// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



Vue.config.productionTip = false

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)


//  mint-ui
//import Mint from 'mint-ui';
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 导入 MUI 的样式

import './lib/mui/css/mui.min.css'

// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// import { Header, Swipe, SwipeItem ,Button} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)


//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
	state:{
		mun:0
	},
	mutations:{
		addToCar(state){
			state.mun++
		}
	},
})

// 安装 图片预览插件
// import VuePreview from 'vue-preview'
// Vue.use(VuePreview)

import router from './router.js'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
