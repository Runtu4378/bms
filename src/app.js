import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import App from './App.vue'
import store from './models/index'
import router from './router'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter)
Vue.use(iView)

new Vue({
  store,
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app')
