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

 ## 改造图片分析 按钮 为路由的链接并显示对应的组件页面

 ## 绘制 图片列表 组件页面结构并美化样式
 1. 制作 顶部滑动条
 2. 制作 底部的图片列表
 ### 制作顶部滑动条的坑们:
 1. 需要借助于 MUI 中的 tab-top-webview-main.html
 2. 需要把 slider 区域的 mui-fullscreen 类去掉
 3. 滑动条无法正常触发滑动,通过检查官方文档,发现这是JS组件,需要被初始化一下:
  + 导入 mui.js
  + 调用官方提供的 方式 去初始化:
  ```
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
 ```
 4. 我们在初始化 滑动条 的时候,导入的 mui.js ,但是,控制台报错: Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
  + 经过我们的合理推测,可能是 mui.js 中用到了 'caller','callee', and 'argument',而 webpack 打包好的 hundle.js 中,默认启用严格模式,所以两者冲突
  + 解决方案: 1. 把 mui.js 中的 非严格模式的代码改掉,但是不现实;
              2. 把 webpack 打包时候的严格模式禁用掉;( babel-plugin-transform-remove-strict-mode )
  + 最终,选了planB 移除严格模式,使用:
    `npm i @babel/plugin-transform-modules-commonjs @babel/plugin-transform-strict-mode -D`
    并在在babel.config.js中
    ```
    plugins: [
    "@babel/plugin-transform-runtime",

    "@babel/plugin-proposal-class-properties",

    ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
    ]
    ```
5. 刚进入 图片分享页面的时候,滑动条无法正常工作, 经过分析发现,若要初始化 滑动    ```
条,必须等 DOM元素加载完毕,所以, 把 初始化 滑动条 的代码,搬到了 mounted 生命周期函数中
6. 当 滑动条 调试OK后,发现 tabbar 无法正常工作,这时,需把 每个 tabbar 按钮样式中的 mui-tab-item 重新修改名字,改成 mui-tab-item-lib
7. 获取所有分类,并渲染分类列表

## 制作图片列表区域
1. 图片列表需要使用 懒加载技术,可使用 mint-ui 提供的组件 'lazy-load'
2. 根据 'lazy-load' 的使用文档

### 实现了 图片列表 懒加载 和 样式美化

## 实现了 点击图片 跳转到 图片详情页面
1. 在改造 li 成 router-link 时,需使用 tag 属性指定要渲染为 哪种元素

## 实现 详情页面的布局美化,同时获取数据渲染页面

## 实现 图片详情中 缩略图的功能
1. 使用 插件 [vue-preview](https://github.com/liulongbin1314/vue2-preview) 这个缩略图插件
2. 获取到所有的图片列表, 然后用 v-for 指定渲染页面
3. 注意: img标签上的 class 不能去掉
4. 注意: 每个图片数据对象中,必须有 w 和 h 属性

## 绘制 商品列表 页面的基本结构并美化

## 尝试 在手机上,去进行项目的预览和测试
1. 保证手机正常运行
2. 保证手机和开发项目的电脑 处于同一个 wifi 环境中 ,也就是说,手机可以访问到电脑ip
3. 打开自己的 项目中 package.json 文件,在 dev 脚本中,添加一个  --host  指令,把当前 电脑 的 wifi ip地址,设置为 --host 的指令值;
 + 如何查看自己电脑所处 wifi 的ip: 在 cmd 终端中运行 'ipconfig',查看无线网的 ip地址

补充:
1. 添加网页标题icon小图标
    ```
    <link rel="shortcut icon" href="图片地址" type="image/x-icon" />
    ```
