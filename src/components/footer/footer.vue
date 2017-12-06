<template>
  <div class="footer">
    <span>首页</span>
    <span>运势</span>
    <span>社区</span>
    <span>我的</span>
  </div>
</template>

<script>
  export default{
    name: 'footer',
    data(){
        return{

        }
    }
  }
</script>

<style scoped>
  span{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 50px;
  }
</style>
