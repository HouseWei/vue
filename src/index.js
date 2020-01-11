//入口文件
import Vue from 'vue'
//1.1 导入 路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进入网站,肯定会调用 index.js , 但刚调用是,先从本地存储中,把 购物车的数据读出来,再放到 store 的car里
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {//this.$store.state.***
        car: car, //将购车车中的商品的数据,用一个数组存储起来,在car 数组中,存储一些商品的对象,暂时设计商品对象,如下: 
        // { id:商品的id, count:购买数量, price: 商品单格, selected: false }


    },
    mutations: {//this.$store.commit('方法名称','按需传递唯一的参数')
        addToCar(state, goodsinfo) {
            //点击加入购物车,把商品信息,保存到 store中的 car里
            //分析: 
            //1. 如果购物车中,之前已经有这个对应的商品,那么只需直接更新数量
            //2. 如果没有,则直接把 商品数据, push 到 car 里

            //假设 在购物车中,未找到对应商品
            var flag = false

            state.car.some(item => {
                if(item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            // 如果最终,循环完毕,得到的flag 还是 false,则直接 push
            if(!flag) {
                state.car.push(goodsinfo)
            }

            //当更新 car之后,把 car数组,保存到本地的localStorage
            localStorage.setItem('car',JSON.stringify(state.car))


        },
        updateGodsInfo(state, goodsinfo) {
            //修改购物车中商品的数量值
            //分析: 
            state.car.some( item => {
                if(item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })

            //当修改完商品的数量,把最新的购物车数量 保存到 本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        removeFromCar(state, id) {
            //根据id, 从store中的购物车删除对应的那条商品数据
            state.car.some((item, i) => {
                if(item.id == id) {
                    state.car.splice(i, 1)
                    return true;
                }           
            })

            //将删除完毕后的数据,同步到 本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if(item.id == info.id) {
                    item.selected = info.selected
                }
            })

            //把最新的 所有购物车商品的状态保存到 store中
            localStorage.setItem('car', JSON.stringify(state.car))

        }

    },
    getters: {//this.$store.getters.***

        //相当于 计算属性 也相当于 filter
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },

        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach( item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0, //勾选数量
                amount: 0,//勾选总价
            }
            
        }


    },

})

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
    store, //挂载 store到 vm实例上

})