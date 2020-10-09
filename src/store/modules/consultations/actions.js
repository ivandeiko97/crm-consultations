import storageApi from '@/storageApi'

export default {
  ADD_CONSULTATION: ({ commit }, { userId, ...consultation }) => {
    const newConsultation = storageApi.addConsultation({ userId, consultation })
    commit('SET_NEW_CONSULTATION', newConsultation)
  },
  GET_CONSULTATIONS: ({ commit }, id) => {
    const consultations = storageApi.getConsultations(id)
    commit('SET_CONSULTATIONS', consultations)
  },
  GET_CONSULTATION: ({ commit }, { id, userId }) => {
    const consultation = storageApi.getConsultation({ id, userId })
    commit('SET_CONSULTATION', consultation)
    return consultation
  },
  DELETE_CONSULTATION: ({ commit }, { id, userId }) => {
    storageApi.removeConsultation(id, userId)
    commit('REMOVE_CONSULTATION', id)
  },
  DELETE_USER_CONSULTATIONS: ({ commit }, userId) => {
    storageApi.removeUserConsultations(userId)
    commit('REMOVE_USER_CONSULTATION')
  },
  EDIT_CONSULTATION: ({ commit }, { userId, ...consultation }) => {
    storageApi.editConsultation({ userId, consultation })
    commit('UPDATE_CONSULTATION', consultation)
  }
}