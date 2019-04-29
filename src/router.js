import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import menber from './components/tabbar/menber.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import NewsList from './components/news/NewsList.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'

var router = new VueRouter({
	routes:[
		{ path: '/', redirect:'/home' },
		{ path: '/home', component: home },
		{ path: '/member', component: menber },
		{ path: '/shopcar', component: shopcar },
		{ path: '/search', component: search },
		{ path: '/home/NewsList', component: NewsList },
		{ path: '/home/NewsList/NewsInfo/:aid', component: NewsInfo },
		{ path: '/home/photolist', component: photolist },
		{ path: '/home/photoinfo/:id', component: photoinfo },
		{ path: '/home/goodslist', component: goodslist },
		{ path: '/home/goodsinfo/:id', component: goodsinfo },
		{ path: '/home/goodsdesc/:id', component: goodsdesc ,name: 'goodsdesc' },
	],
	linkActiveClass: 'is-selected'
})
export default router