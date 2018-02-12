import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './models/index'
import router from './router'

new Vue({
  store,
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app')
