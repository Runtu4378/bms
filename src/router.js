import VueRouter from 'vue-router'
import utils from './common/utils'

const { wrapRoutes, setTitle } = utils

const routes = [
  {
    path: '/',
    title: '主页',
    component: () => import('@routes/index.vue'),
    children: [
      {
        path: '/book',
        title: '图书列表',
        component: () => import('@routes/book/index'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  // routes: [],
  routes: wrapRoutes(routes),
})

router.afterEach(transition => {
  router.options.routes.forEach(ele => {
    if (ele.name === transition.name) {
      setTitle(ele.title)
    }
  })
})

export default router
