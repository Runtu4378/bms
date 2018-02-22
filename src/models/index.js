import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import book from './book'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    book,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export default store
