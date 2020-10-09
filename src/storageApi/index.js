const generateId = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()

class Patient {
  constructor({ surname, name, patronymic = null, birthday, male, insurance }) {
    this.surname = surname // string required
    this.name = name // string required
    this.patronymic = patronymic// string nullable
    this.birthday = birthday // date required
    this.male = male // string required
    this.insurance = insurance // string required
    this.id = generateId() // string required
  }
}
class Consultation {
  constructor({ timeReceipt, symptoms = null }) {
    this.timeReceipt = timeReceipt // timestamp required
    this.symptoms = symptoms // string nullable
    this.id = generateId()
  }
}

const CONSULTATIONS = 'consultations'
const PATIENTS = 'patients'

class storageApi {
  setPatients(patients) {
    localStorage.setItem(PATIENTS, JSON.stringify(patients))
  }
  setConsultations(consultations, id) {
    let data = localStorage.getItem(CONSULTATIONS)

    if (data) {
      data = JSON.parse(data)
      data[id] = consultations
      localStorage.setItem(CONSULTATIONS, JSON.stringify(data))
    } else {
      localStorage.setItem(CONSULTATIONS, JSON.stringify({ [id]: consultations }))
    }
  }
  getPatients() {
    const data = localStorage.getItem(PATIENTS)
    return data ? JSON.parse(data) : []
  }
  getPatient(id) {
    const patient = this.getPatients().find(patient => patient.id === id)
    return patient ? patient : null
  }
  getConsultations(id) {
    const data = localStorage.getItem(CONSULTATIONS)
    const consultations = JSON.parse(data)

    if (consultations && consultations[id]) return consultations[id]

    return []
  }
  getConsultation({ id, userId }) {
    const consultations = this.getConsultations(userId)
    if (consultations.length) {
      const consultation = consultations.find(cons => cons.id === id)
      
      return consultation ? consultation : null
    }

    return null
  }
  addPatient(patient) {
    const patients = this.getPatients()
    const newPatient = new Patient(patient)
    patients.push(newPatient)
    this.setPatients(patients)

    return newPatient
  }
  addConsultation({ userId, consultation }) {
    const consultations = this.getConsultations(userId)
    const newConsultation = new Consultation(consultation)
    const newConsultations = consultations.length ? [...consultations, newConsultation] : [newConsultation]

    this.setConsultations(newConsultations, userId)
    
    return newConsultation
  }
  removePatient(id) {
    const patients = this.getPatients().filter(patient => patient.id !== id)
    this.setPatients(patients)
  }
  removeConsultation(id, userId) {
    const consultations = JSON.parse(localStorage.getItem(CONSULTATIONS))
    consultations[userId] = consultations[userId].filter(cons => cons.id !== id)
    localStorage.setItem(CONSULTATIONS, JSON.stringify(consultations))
  }
  removeUserConsultations(userId) {
    const consultations = JSON.parse(localStorage.getItem(CONSULTATIONS))
    // eslint-disable-next-line no-unused-vars
    const { [userId]: deleted , ...newConsultations } = consultations
    localStorage.setItem(CONSULTATIONS, JSON.stringify(newConsultations))
  }
  editPatient(patient) {
    const patients = this.getPatients().map(p => p.id === patient.id ? patient : p)
    this.setPatients(patients)
  }
  editConsultation({ userId, consultation }) {
    const consultations = JSON.parse(localStorage.getItem(CONSULTATIONS))
    consultations[userId] = consultations[userId].map(cons => cons.id === consultation.id ? consultation : cons)
    localStorage.setItem(CONSULTATIONS, JSON.stringify(consultations))
  }
}

export default new storageApi()
