import Vue from 'vue'
import App from './App.vue'
import VRouter from 'vue-router'
import diary from './components/content/diary/diary.vue'
import account from './components/content/account/account.vue'
import memorandum from './components/content/memorandum/memorandum.vue'
import birthday from './components/content/birthday/birthday.vue'
import timetable from './components/content/timetable/timetable.vue'
import circle from './components/content/circle/circle.vue'

Vue.use(VRouter);

let router= new VRouter({
  routes:[
    {
      path: '/diary',
      component: diary
    },
    {
      path: '/account',
      component: account
    },
    {
      path: '/memorandum',
      component: memorandum
    },
    {
      path: '/birthday',
      component: birthday
    },
    {
      path: '/timetable',
      component: timetable
    },
    {
      path: '/circle',
      component: circle
    }
  ]
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

