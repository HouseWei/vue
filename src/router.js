import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './comopnents/tabbar/HomeContainer.vue'
import MemberContainer from './comopnents/tabbar/MemberContainer.vue'
import ShopCartContainer from './comopnents/tabbar/ShopCartContainer.vue'
import SearchContainer from './comopnents/tabbar/SearchContainer.vue'



//3.创建 路由对象
const router = new VueRouter({
    routes: [//配置路由规则
        { path: '/home', component: HomeContainer},
        { path: '/member', component: MemberContainer},
        { path: '/shopcart', component: ShopCartContainer},
        { path: '/search', component: SearchContainer}
    ],
    linkActiveClass: 'mui-active', //覆盖默认的路由高亮的类,默认的类叫 router-link-active
})

//把路由对象暴露出去
export default router