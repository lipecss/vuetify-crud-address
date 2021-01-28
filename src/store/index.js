import Vue from 'vue'
import Vuex from 'vuex'

// // Plugins
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// Modules
import ModuleErrors from './modules/errors'
import Moduleaddress from './modules/address'

Vue.use(Vuex)

const modules = {
  ModuleErrors,
  Moduleaddress
}

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state,
  actions,
  mutations,
  getters,
  modules
})
