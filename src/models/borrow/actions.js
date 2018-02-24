import config from '@utils/config'
import { queryAll as QUERYALL, queryUser as QUERYUSER, returnFuc as RETURN } from '@services/borrow'

const { defaultPage, defaultPageSize } = config

export const query = async ({ dispatch, commit, rootState }, payload) => {
  const { type } = rootState.login.user
  if (type === '00') {
    // 管理员逻辑
    dispatch('queryAll', payload)
  } else if (type === '01') {
    // 普通使用者逻辑
    dispatch('queryUser', payload)
  }
}

// 获取列表数据
export const queryAll = async ({ dispatch, commit, state }, payload) => {
  // 异步获取列表数据
  const { page, pageSize } = payload
  const pageProps = {
    page: page || defaultPage,
    pageSize: pageSize || defaultPageSize,
  }
  const { success, data, message } = await QUERYALL({
    ...pageProps,
  })
  if (success) {
    commit('querySuccess', data)
  } else {
    throw new Error(message)
  }
}

// 获取列表数据
export const queryUser = async ({ dispatch, commit, rootState }, payload) => {
  const { id: uid } = rootState.login.user
  // 异步获取列表数据
  const { page, pageSize } = payload
  const pageProps = {
    page: page || defaultPage,
    pageSize: pageSize || defaultPageSize,
  }
  const { success, data, message } = await QUERYUSER({
    uid,
    ...pageProps,
  })
  console.log(success, data, message)
  if (success) {
    commit('querySuccess', data)
  } else {
    throw new Error(message)
  }
}

// 借书
export const returnBook = async ({ dispatch, commit }, payload) => {
  const { success, message } = await RETURN(payload)
  if (success) {
    dispatch('query', {})
  } else {
    throw new Error(message)
  }
}
