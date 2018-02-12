import Vue from 'vue'
import VueRouter from 'vue-router'
import utils from './common/utils'
import Counter from './routes/index.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }

const routes = [
  {
    path: '/',
    title: '主页',
    component: Foo,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.afterEach(transition => {
  router.options.routes.forEach(ele => {
    if (ele.name === transition.name) {
      utils.setTitle(ele.title)
    }
  })
})

export default router
