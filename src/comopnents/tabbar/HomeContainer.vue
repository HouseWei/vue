<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for,需加 :key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 到 六宫格 的改造-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/menu1.png" alt="" />
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/menu2.png" alt="" />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/menu3.png" alt="" />
          <div class="mui-media-body">购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/menu4.png" alt="" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/menu5.png" alt="" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/menu6.png" alt="" />
          <div class="mui-media-body">联系我</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getSwipe();
  },
  methods: {
    getSwipe() {
      //获取轮播图
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          //成功了
          console.log(result);
          this.lunbotuList = result.body.message;
        } else {
          //失败了
          Toast("加载轮播图失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: rgb(173, 230, 181);
    }
    &:nth-child(2) {
      background-color: rgb(230, 226, 173);
    }
    &:nth-child(3) {
      background-color: rgb(173, 230, 230);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>