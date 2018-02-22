import config from '@utils/config'
import { query as QUERY } from '@services/book'

const { defaultPage, defaultPageSize } = config

// 获取列表数据
export const query = async ({ dispatch, commit, state }, payload) => {
  console.log('action')
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
    throw message
  }
}
