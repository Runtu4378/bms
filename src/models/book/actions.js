import config from '@utils/config'
import { query as QUERY, add as ADD, edit as EDIT, borrowFuc as BORROW } from '@services/book'

const { defaultPage, defaultPageSize } = config

// 获取列表数据
export const query = async ({ dispatch, commit, state }, payload) => {
  // 异步获取列表数据
  const { page, pageSize } = payload
  const pageProps = {
    page: page || defaultPage,
    pageSize: pageSize || defaultPageSize,
  }
  const { success, data, message } = await QUERY({
    obj: payload,
    pageProps,
  })
  console.log(success, data, message)
  if (success) {
    commit('querySuccess', data)
  } else {
    throw new Error(message)
  }
}

// 新增图书
export const add = async ({ dispatch, commit }, payload) => {
  const { success, data, message } = await ADD(payload)
  if (success) {
    commit('modalEditHide')
    console.log(data)
    dispatch('query', {})
  } else {
    throw new Error(message)
  }
}

// 编辑图书
export const edit = async ({ dispatch, commit }, payload) => {
  const { success, data, message } = await EDIT(payload)
  if (success) {
    commit('modalEditHide')
    console.log(data)
    dispatch('query', {})
  } else {
    throw new Error(message)
  }
}

// 借书
export const borrow = async ({ dispatch, commit, rootState }, payload) => {
  const { id: uid } = rootState.login.user
  const { success, message } = await BORROW({ uid, bid: payload })
  if (success) {
    dispatch('query', {})
  } else {
    throw new Error(message)
  }
}
