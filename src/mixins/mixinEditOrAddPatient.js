import { checkInsurance } from '../helpers'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Имя обязательно',
    ],
    surname: '',
    surnameRules: [
      v => !!v || 'Фамилия обязательна',
    ],
    patronymic: '',
    birthday: '',
    birthdayRules: [
      v => !!v || 'Дата рождения обязательна',
    ],
    male: '',
    maleRules: [
      v => !!v || 'Выберите пол',
    ],
    errorMale: false,
    insurance: '',
    insuranceRules: [
      v => !!v || 'СНИЛС обязателен',
      checkInsurance
    ]
  }),
  methods: {
    ...mapActions('notifications', ['SHOW_NOTIFICATION', 'HIDE_NOTIFICATION']),
    validate () {
      this.$refs.form.validate()
    },
    createPatient() {
      return {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        birthday: Date.parse(this.birthday),
        male: this.male,
        insurance: this.insurance.replace(/\s/g, ''),
      }
    },
    clearData() {
      this.name = ''
      this.surname = ''
      this.patronymic = ''
      this.birthday = ''
      this.male = ''
      this.insurance = ''
      this.$refs.form.resetValidation()
    },
    showNotification(text, isSuccess) {
      this.SHOW_NOTIFICATION({ text, isSuccess })
      setTimeout(this.HIDE_NOTIFICATION, 1000)
    }
  },
}