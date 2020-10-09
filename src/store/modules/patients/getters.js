import { getFullName, parseDate } from '@/helpers'

export default {
  PATIENTS: ({ patients, search}) => {
    if (!patients) return

    return patients.filter(patient => {
      const fullName = getFullName(patient).replace(/\s/g, '').toUpperCase()
      search = search.replace(/\s/g, '').toUpperCase()
      return (fullName.includes(search) || patient.insurance.includes(search))
    }).map(patient => ({...patient, birthday: parseDate(patient.birthday, false, true)}))
  },
  PATIENT: ({ patient }) => ({...patient, birthday: parseDate(patient.birthday, false, true)})
}