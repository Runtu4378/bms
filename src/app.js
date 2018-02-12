import Vue from 'vue'
import store from './models/index'
import Counter from './routes/index.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})