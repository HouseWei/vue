<template>
    <div>
        <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for,需加 :key -->
      <!-- 以后,谁使用此轮播图,谁为我们传递 lunbotuList -->
      <!-- 此时,lunbotuList 应该是 父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="(item, i) in lunbotuList" :key="i">
        <img :src="item.img" alt="" :class="{full: isfull}"/>
      </mt-swipe-item>
    </mt-swipe>
    </div>

    <!-- 分析: 为什么 商品评论中的 轮播图 那么丑 -->
    <!-- 1. 首页中的图片,宽高都使用 100% 的宽度 -->
    <!-- 2. 在商品详情页面中,轮播图的图片 如果也使用 宽高100%的话,页面不好看 -->
    <!-- 3. 商品详情页面中的轮播图, 期望 高度是100% ,宽度是自适应 -->
    <!-- 4. 经过分析,得到问题的原因: 首页中的轮播图 和 详情中的轮播图,分歧点是:宽度到底是 100% 还是 自适应 -->
    <!-- 5. 既然这两个轮播图 其他方面都没冲突,只是宽度有问题,那么我们可定义一个属性,让 调用者,手动设置 宽度 -->
</template>


<script>
export default {
    props: ['lunbotuList', 'isfull']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
      // width: 100%;
      height: 100%;
    }
  }

  .full{
    width: 100%;
  }
}
</style>