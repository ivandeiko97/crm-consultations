export default {
  SET_NEW_CONSULTATION: (state, consultation) => state.consultations.push(consultation),
  SET_CONSULTATIONS: (state, payload) => state.consultations = payload,
  SET_CONSULTATION: (state, payload) => state.consultation = payload,
  REMOVE_CONSULTATION: (state, payload) => state.consultations = state.consultations.filter(cons => cons.id !== payload),
  REMOVE_USER_CONSULTATION: state => state.consultations = null,
  UPDATE_CONSULTATION: (state, payload) => state.consultations = state.consultations.map(cons => cons.id === payload.id ? payload : cons)
}