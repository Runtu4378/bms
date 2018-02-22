// import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  login: false,
  user: {},
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
