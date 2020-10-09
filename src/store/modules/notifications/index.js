export default {
  namespaced: true,
  state: () => ({
    showNotification: false,
    notificationText: null,
    isSuccess: true,
  }),
  mutations: {
    SET_NOTIFICATION: (state, { text, isSuccess }) => {
      state.showNotification = true
      state.notificationText = text
      state.isSuccess = isSuccess
    },
    CLEAR_NOTIFICATION: state => {
      state.showNotification = false
      state.notificationsText = null
      state.isSuccess = true
    }
  },
  actions: {
    SHOW_NOTIFICATION: ({ commit }, notification) => commit('SET_NOTIFICATION', notification),
    HIDE_NOTIFICATION: ({ commit }) => commit('CLEAR_NOTIFICATION')
  }
}