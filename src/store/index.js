import Vue from 'vue'
import Vuex from 'vuex'

import patients from './modules/patients'
import consultations from './modules/consultations'
import notifications from './modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    patients,
    consultations,
    notifications,
  }
})
