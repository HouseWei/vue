<template>
  <div>

      <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        this.getSwipe();
    },
    methods: {
        getSwipe() {//获取轮播图
            this.$http.get('api/getimgcategory').then(result => {
                console.log()
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        &:nth-child(1){
        background-color: rgb(173, 230, 181);
        }
        &:nth-child(2){
        background-color: rgb(230, 226, 173);
        }
        &:nth-child(3){
        background-color: rgb(173, 230, 230);
        }

    }
}
</style>