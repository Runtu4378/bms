import VueRouter from 'vue-router'
import utils from '@utils/func'

const { wrapRoutes, setTitle } = utils

const routes = [
  {
    path: '/',
    name: '主页',
    component: () => import('@routes/index.vue'),
    children: [
      {
        path: '/book',
        name: '图书列表',
        component: () => import('@routes/book/index'),
      },
      {
        path: '/borrow',
        name: '待还列表',
        component: () => import('@routes/borrow/index'),
      },
    ],
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@routes/login/index'),
  },
]

const router = new VueRouter({
  mode: 'history',
  // routes: [],
  routes: wrapRoutes(routes),
})

router.afterEach(transition => {
  setTitle(transition.name)
})

export default router
