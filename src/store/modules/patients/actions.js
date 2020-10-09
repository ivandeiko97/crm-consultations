import storageApi from '@/storageApi'

export default  {
  ADD_NEW_PATIENT: ({ commit }, patient) => {
    const newPatient = storageApi.addPatient(patient)
    commit('SET_NEW_PATIENT', newPatient)
  },
  GET_PATIENTS: ({ commit }) => {
    const patients = storageApi.getPatients()
    commit('SET_PATIENTS', patients)
  },
  GET_PATIENT: ({ commit }, { id }) => {
    const patient = storageApi.getPatient(id)
    commit('SET_PATIENT', patient)
    return patient
  },
  DELETE_PATIENT: ({ commit, dispatch }, id) => {
    storageApi.removePatient(id)
    dispatch('consultations/DELETE_USER_CONSULTATIONS', id, {root: true})
    commit('REMOVE_PATIENT', id)
  },
  EDIT_PATIENT: ({ commit }, patient) => {
    storageApi.editPatient(patient)
    commit('EDIT_PATIENT', patient)
  },
  CHANGE_SEARCH: ({ commit }, search) => commit('SET_SEARCH', search)
}