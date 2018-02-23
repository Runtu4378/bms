// import Vuex from 'vuex'
import config from '@utils/config'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const { defaultPage, defaultPageSize } = config

const state = {
  list: [],
  pagination: {
    current: defaultPage,
    pageSize: defaultPageSize,
    total: null,
  },
  // 编辑弹窗
  modalEditVisible: false,
  modalEditTitle: '',
  modalEditItem: {},
  // 详情弹窗
  modalViewVisible: false,
  modalViewItem: {},
}

const store = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
  ], () => {
    store.hotUpdate({
      getters: import('./getters'),
      actions: import('./actions'),
      mutations: import('./mutations'),
    })
  })
}

export default store
