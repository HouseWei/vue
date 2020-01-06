//入口文件
import Vue from 'vue'

//导入 MUI 样式   
import './lib/mui/css/mui.min.css'

//导入 Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//按需导入Mint-UI 中的组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

//导入 App 根组件
import app from './App.vue'

const vm = new Vue({
    el: '#app',
    render:c => c(app)
})