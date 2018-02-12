import Vue from 'vue'
import VueRouter from 'vue-router'
import Counter from './routes/index.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }

const routes = [
  { path: '/', component: Foo },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
