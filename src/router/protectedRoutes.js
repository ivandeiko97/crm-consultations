import store from '@/store'

import { 
  EDIT_CONSULTATION, 
  DETAIL_PATIENT,
  EDIT_PATIENT
} from './consts'


export default {
  [EDIT_CONSULTATION]: params => store.dispatch('consultations/GET_CONSULTATION', params),
  [DETAIL_PATIENT]: params => store.dispatch('patients/GET_PATIENT', params),
  [EDIT_PATIENT]: params => store.dispatch('patients/GET_PATIENT', params),
}