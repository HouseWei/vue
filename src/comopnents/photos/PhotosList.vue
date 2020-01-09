<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            @click="getPhotoListByCategraryId(item.id)"
          >{{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photoList">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
            <h1 class="info-title">{{ item.title }}</h1>
            <div class="info-body">{{ item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//1. 导入 mui 的js文件
import mui from "../../lib/mui/js/mui";

export default {
  data() {
    return {
      cates: [], //所有分类的列表数组
      list: [] //图片列表的数组
    };
  },
  created() {
    this.getAllCategrary();
    //默认进入页面,就主动请求所有图片
    this.getPhotoListByCategraryId(0);
  },
  mounted() {
    //当组件中的 DOM结构被渲染好并放到页面后,会执行这个 钩子函数
    //如果要操作元素了,最好在 mounted 里面,因为里面的 DOM元素是最新的
    //2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategrary() {
      //获取所有组件分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getPhotoListByCategraryId(cateId) {
      //根据 分类id 获取图片列表
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// * {
//     touch-action: pan-y;
// }

.photoList {
  list-style: none;
  padding: 10px;
  margin: 0;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    position: relative;
    img{
        width: 100%;
        vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info{
        color: #fff;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.2);
        max-height: 84px;
        .info-title{
            font-size: 14px;
        }

        .info-body{
            font-size: 13px;
        }
    }
  }
}
</style>