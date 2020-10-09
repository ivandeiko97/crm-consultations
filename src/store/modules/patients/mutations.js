export default {
  SET_NEW_PATIENT: (state, payload) => state.patients.push(payload),
  SET_PATIENTS: (state, payload) => state.patients = payload,
  SET_PATIENT: (state, payload) => state.patient = payload,
  REMOVE_PATIENT: (state, payload) => state.patients = state.patients.filter(({ id }) => id !== payload),
  EDIT_PATIENT: (state, payload) => state.patients = state.patients.map(patient => patient.id === payload.id ? payload : patient),
  SET_SEARCH: (state, payload) => state.search = payload,
}