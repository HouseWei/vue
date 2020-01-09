//入口文件
import Vue from 'vue'
//1.1 导入 路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)

import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//2.1 导入 vue-resource
import VueResource from 'vue-resource'
//2.2 安装 vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/'  
Vue.http.options.emulateJSON = true           //全局设置post请求表单数据

//导入 MUI 样式   
import './lib/mui/css/mui.min.css'

//导入 Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI 中的组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

//安装 图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

//1.3 导入自己的 router.js 路由模块
import router from './router'

//导入 App 根组件
import app from './App.vue'

const vm = new Vue({
    el: '#app',
    render:c => c(app),
    router,  //1.4 挂载路由对象到 vm 实例上
})