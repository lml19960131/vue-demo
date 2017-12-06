<template>
  <div id="app">
    <top></top>
    <div class="content">
      <div class="diary">
        <router-link :to="{path: 'diary'}">
        <span class="logo">
          <img class="logo-img" src="assets/diary.jpg">
          <span class="logo-font">日记</span>
        </span>
        </router-link>
      </div>
      <div class="account">
        <router-link :to="{path: 'account'}">
          <span class="logo">
            <img class="logo-img" src="assets/account.jpg">
            <span class="logo-font">账单</span>
          </span>
        </router-link>
      </div>
      <div class="memorandum">
        <router-link :to="{path: 'memorandum'}">
          <span class="logo">
            <img class="logo-img" src="assets/memorandum.jpg">
            <span class="logo-font">备忘录</span>
          </span>
        </router-link>
      </div>
      <div class="birthday">
        <router-link :to="{path: 'birthday'}">
          <span class="logo">
            <img class="logo-img" src="assets/birthday.jpg.jpg">
            <span class="logo-font">生日</span>
          </span>
        </router-link>
      </div>
      <div class="timetable">
        <router-link :to="{path: 'timetable'}">
          <span class="logo">
            <img class="logo-img" src="assets/timetable.jpg">
            <span class="logo-font">日程安排</span>
          </span>
        </router-link>
      </div>
      <div class="circle">
        <router-link :to="{path: 'circle'}">
          <span class="logo">
            <img class="logo-img" src="assets/circle.jpg.jpg">
            <span class="logo-font">动态</span>
          </span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import top from './components/top/top.vue'
  import foot from './components/footer/footer.vue'

  export default{
    name: 'App',
    components: {
      top,
      foot
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .content {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px;
  }

  .logo{
    width: 100px;
    height: 100px;
  }

  .logo-img{
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-top: 20px;
  }

  .logo-font {
    display: block;
    color: black;
    text-align: center;
    font-size: 14px;
  }

  a{
    text-decoration: none;
  }
</style>
