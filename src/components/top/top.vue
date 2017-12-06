<template>
  <div class="top">
    <span class="logo">
        <img class="logo" src="../../assets/logo.png">
    </span>
    <span class="date">{{getDate()}}</span>
  </div>
</template>

<script>
 export default{
   name: 'top',
   data(){
     return{
       date: new Date(),
     }
   },
   methods:{
     getDate(){
       return this.date.getFullYear()+'年'+(this.date.getMonth()+1)+'月'+this.date.getDate()+'日'
     }
   }
 }
</script>

<style scoped>
  .top{
    width: 100%;
    height: 45px;
    position: relative;
    border-bottom: 1px solid rgba(7,17,27,0.5);
  }
  .logo{
    margin-left: 10px;
    height: 40px;
    width: 40px;
  }
  .date{
    position: absolute;
    font-size: 12px;
    color: gray;
    right: 10px;
    bottom: 5px;
  }
</style>
