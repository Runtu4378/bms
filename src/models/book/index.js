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
  modalEditVisible: false,
  modalEditTitle: '',
  modalEditItem: {},
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
