<template>
  <v-card
    max-width="500"
    width="100%"
    class="d-flex justify-center ma-auto pa-3"
  >
    <v-form
      ref="form"
      class="d-flex flex-column py-5"
      v-model="valid"
      style="width: 320px"
    >
      <base-date-picker
        @change-date="date = $event"
        @change-time="time = $event"
        :time="time"
        :date="date"
        :timeRules="timeRules"
        :dateRules="dateRules"
        dateLabel="День приема"
        :withTimePicker="true"
      />
      <base-input label="Cимптомы" v-model="symptoms" :value="symptoms" />
      <base-button text="Добавить" @click="handlerClick" />
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'add-consultation',
  data() {
    return {
      valid: true,
      typeForm: '',
      time: '',
      timeRules: [
        v => !!v || 'Время приема обязательно',
      ],
      date: '',
      dateRules: [
        v => !!v || 'Дата приема обязательна'
      ],
      symptoms: ''
    }
  },
  computed: {
    ...mapGetters('consultations', ['CONSULTATION'])
  },
  methods: {
    ...mapActions('notifications', ['SHOW_NOTIFICATION', 'HIDE_NOTIFICATION']),
    handlerClick() {
      if (this.typeForm === 'ADD') {
        this.addConsultation()
      } else {
        this.editConsultation()
      }
    },
    addConsultation() {
      this.$store.dispatch(`consultations/ADD_CONSULTATION`, {
        symptoms: this.symptoms,
        timeReceipt: Date.parse(`${this.date}T${this.time}`),
        userId: this.$route.params.userId
      })
      this.symptoms = ''
      this.date = ''
      this.time = ''
      this.$refs.form.resetValidation()
      this.$router.back()
      this.showNotification('Консультация была добавлена', true)
    },
    editConsultation() {
      this.$store.dispatch(`consultations/EDIT_CONSULTATION`, {
        symptoms: this.symptoms,
        timeReceipt: Date.parse(`${this.date}T${this.time}`),
        id: this.$route.params.id,
        userId: this.$route.params.userId
      })
      this.showNotification('Консультация изменена', true)
       this.$router.back()
    },
    showNotification(text, isSuccess) {
      this.SHOW_NOTIFICATION({ text, isSuccess })
      setTimeout(this.HIDE_NOTIFICATION, 1000)
    },
    setData() {
      const {
        time,
        date,
        symptoms
      } = this.CONSULTATION

      this.time = time
      this.date = date
      this.symptoms = symptoms
    }
  },
  mounted() {
    switch(this.$route.name) {
      case 'add-consultation': 
        this.typeForm = 'ADD'
        break
      case 'edit-consultation':
        this.typeForm = 'EDIT'
        this.setData()
        break
    }
  }
}
</script>