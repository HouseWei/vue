<template>
  <!-- 不清楚什么时候拿到 max值,但总归有一刻,会得到一个真正的 max值 -->
  <!-- 我们可以使用 watch属性监听,来监听父组件传递过来的 max值,无论 max组件会被触发几次,但最后一次,肯定是一个合法的 max数值 -->
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

  <!-- 分析: 子组件什么时候 向父组件 传递数据 -->
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  mounted() {
    //初始化 数字选择框
    mui(".mui-numbox").numbox();
    // console.log(this.max)
  },
  methods: {
    countChanged() {
      //每当文本框的数据被修改的时候,立即把 最新的数据, 通过事件调用,传递给父组件
      // console.log(this.$refs.numbox.value)
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  watch: {
    //属性监听
    max: function(newVal, oldVal) {
      //使用JS API设置numbox的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>