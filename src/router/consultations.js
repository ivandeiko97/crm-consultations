import Consultations from '@/views/Consultations.vue'
import AddOrEditConsultation from '@/components/AddOrEditConsultation'

import { EDIT_CONSULTATION } from './consts'

export default {
  path: '/consultations',
  name: 'consultations',
  redirect: '/consultations/add-consultations/:id',
  component: Consultations,
  children: [
    {
      path: 'add-consultations/:userId',
      name: 'add-consultation',
      component: AddOrEditConsultation
    },
    {
      path: 'edit-consultations/:userId/:id',
      name: EDIT_CONSULTATION,
      component: AddOrEditConsultation
    },
  ]
}