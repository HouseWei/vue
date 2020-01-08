<template>
  <div class="newsinfo-container">
      <!-- 大标题 -->
    <h3 class="title">{{ newsInfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间: {{ newsInfo.add_time | dataFormat}}</span>
      <span>点击: {{ newsInfo.click }}次</span>
    </p>

    <hr />
    <!-- 内容区域 -->
    <div class="content" v-html="newsInfo.content"></div>

    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>

//1.导入子组件
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, //将 url 地址中传递过来的 id值,挂载到data 上,方便以后调用
      newsInfo: {}, //新闻对象
    };
  },
  created() {
      this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      //获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
            //成功
            this.newsInfo = result.body.message[0];
        }else {
            //失败
        }
      });
    }
  },
  components: { //用来注册子组件的节点
    'comment-box': comment
  }

};
</script>

<style lang="scss" >
.newsinfo-container {
  padding: 0 4px;

  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
      
  }
}
</style>