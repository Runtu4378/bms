// import VueRouter from 'vue-router'
import { check as CHECKLOGIN, loginFuc as LOGIN, logoutFuc as LOGOUT } from '@services/login'

// 检查登录态
export const checkLogin = async ({ dispatch, commit, state }, payload) => {
  // 异步检查登录态
  const { success, data, message } = await CHECKLOGIN()
  if (success) {
    // 保存用户信息
    commit('loginSuccess', data)
  } else {
    // 重定向到登录路由
    payload.push('/login')
    throw message
  }
}

// 登录
export const login = async ({ dispatch, commit, state }, payload) => {
  const { data: params, router } = payload
  const { success, data, message } = await LOGIN(params)
  if (success) {
    // 保存用户信息
    commit('loginSuccess', data)
    router.push('/')
  } else {
    throw message
  }
}

// 退出登录
export const logout = async ({ dispatch, commit, state }, payload) => {
  const { uid, router } = payload
  await LOGOUT({ uid })
  commit('logout')
  router.push('/login')
}
