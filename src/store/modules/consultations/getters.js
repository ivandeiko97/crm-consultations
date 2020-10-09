import { parseDate } from '@/helpers'

export default {
  CONSULTATIONS: ({ consultations }) => {
    if (!consultations) return

    return consultations.map(cons => ({
      ...cons,
      timeReceipt: parseDate(cons.timeReceipt, true, true)
    }))
  },
  CONSULTATION: ({ consultation }) => {
    return {
      ...consultation,
      time: parseDate(consultation.timeReceipt, true),
      date: parseDate(consultation.timeReceipt, false, true)
    }
  }
}