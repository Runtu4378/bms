import Vue from 'vue'
import Vuex from 'vuex'
import book from './book'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    book,
  },
})

export default store
