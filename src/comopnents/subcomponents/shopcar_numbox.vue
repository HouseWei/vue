<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max" style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="initcount"
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
      //数量变了
      // console.log(this.$refs.numbox.value)
      //每当数量值改变,则立即把最新的数量同步到 购物车的 store中,覆盖之前的数量值
      this.$store.commit('updateGodsInfo', { 
        id: this.goodsid,
        count: this.$refs.numbox.value
        })
    }
  },
  props: ['initcount', 'goodsid']
};
</script>

<style lang="scss" scoped>
</style>