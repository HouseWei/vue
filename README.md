# 这是一个NB的项目

## 厉不厉害,用心去感受,每一行代码中的事情压抑

### 我们是有灵魂的程序员,让代码富含诗意

## [开源协议之间的区别](https://blog.csdn.net/qq_39239110/article/details/92834885)

## 用传统方式把修改过的代码上传到github
1. git add
2. git commit -m  '提交信息'
3. git push

## 制作首页App组件
1. 完成 Header区域,使用的是 Mint-UI中的Header组件
2. 制作 Tabbar区域,使用的是 MUI中的 tabbar.html
 + 在制作 购物车 小图标的时候,操作会相对多一些
 + 先把 扩展图标的 css样式,拷贝到 目录中
 + 再把 扩展字体库 tth文件,拷贝到项目中
 + 为 购物车小图标,添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart` 
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮,修改 linkActiveClass 属性

## 点击 tabbar 中的路由连接,展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据,如何获取: vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据要保存到 data 身上
4. 使用v-for 循环渲染每个 item

## 改造 九宫格区域样式

## 改造 新闻资讯 路由链接

## 新闻资讯页面制作
1. 绘制界面,使用mui 中的 media-list
2. 使用vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link,同时, 在跳转的时候应该提供唯一的Id标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在 路由模块中,将 新闻详情的 路由地址 和 组件页面对应起来

## 实现新闻详情 的页面布局,和数据渲染


## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中, 先手动 导入 comment 组件
 +  `import comment from './comment.vue'`
3. 在父组件中,使用 `components` 属性, 将导入的 comment 组件, 注册为自己的 子组件
4. 将注册子组件时候的 注册名称, 以标签形式 在页面中引用

## 获取所有的评论数据,显示到页面中
1. getComments

## 实现点击加载更多评论的功能
1. 为 加载更多 按钮,绑定事件,在事件中,请求 下一页
2. 点击加载更多,让 pageIndex 自增, 重新调用 getComments 方法,重新获取评论数据
3. 为了防止新数据覆盖老数据的情况下,在点击 加载更多 时,调用 concat 让 老数据 和 新数据 拼接

## 发表评论
1. 把文本框做双向数据绑定
2. 为 发表按钮 绑定事件
3. 校验评论内容 是否为空,如果为空,则 toast 用户,评论内容不能为空
4. 通过 vue-resource 发送请求, 把评论内容 提交给 服务器
5. 当发表评论ok后,重新刷新列表,以查看 最新的评论
 + 如果调用 getcomments 方法重新刷新列表的话,可能只能得到 最后一页的评论,前几页的评论获取不到
 + 换一种思路: 当评论成功后,在客户端,手动拼接出一个 最新的评论对象,然后 调用 数组的 unshift 方法,把最新的评论,追加到 data 中 comments 的开头, 这样,就能完美的实现刷新列表的需求