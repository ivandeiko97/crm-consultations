import Patients from '@/views/Patients.vue'
import PatientsTable from '@/components/PatientsTable'

import { EDIT_PATIENT, DETAIL_PATIENT } from './consts'

export default {
  path: '/patients',
  name: 'patients',
  component: Patients,
  children: [
    {
      path: '',
      name: 'patients-tables',
      component: PatientsTable
    },
    {
      path: 'add',
      name: 'add-patient',
      component: () => import('../components/AddPatient.vue')
    },
    {
      path: 'edit/:id',
      name: EDIT_PATIENT,
      component: () => import('../components/EditPatient.vue')
    },
    {
      path: 'detail/:id',
      name: DETAIL_PATIENT,
      component: () => import('../components/DetailPatient.vue')
    }
  ]
}