<template>
  <v-card
    class="d-flex justify-center ma-auto pa-3"
    width="300"
  >
    <v-form
      ref="form"
      v-model="valid"
      class="d-flex flex-column"
    >
      <base-input
        v-model="name"
        :value="name"
        :rules="nameRules"
        label="Имя*"
      />
      <base-input
        v-model="surname"
        :rules="surnameRules"
        label="Фамилия*"
        required
      />
      <base-input
        v-model="patronymic"
        label="Отчество"
      />
      <base-date-picker
        :date="birthday"
        :rules="birthdayRules"
        @change-date="birthday = $event"
      />
      <base-radio-male
        v-model="male"
        :value="male"
        :rules="maleRules"
      />
       <base-input
        v-model="insurance"
        :rules="insuranceRules"
        label="СНИЛС*"
      />
      <base-button 
        text="Сохранить" 
        @click="savePatient"
        class="mt-3"
      />
    </v-form>
  </v-card>
</template>

<script>
import mixinEditOrAddPatient from '@/mixins/mixinEditOrAddPatient'
import { mapGetters } from 'vuex'

export default {
  name: 'edit-patient',
  mixins: [mixinEditOrAddPatient],
  computed: {
    ...mapGetters('patients', ['PATIENT'])
  },
  watch: {
    PATIENT() {
      this.setPatientData()
    }
  },
  methods: {
    setPatientData() {
      const patient = this.PATIENT

      if (!patient) return

      const {
        name,
        surname,
        patronymic,
        birthday,
        male,
        insurance,
      } = patient

      this.name = name
      this.surname = surname
      this.patronymic = patronymic
      this.birthday = birthday
      this.male = male
      this.insurance = insurance
    },
    savePatient() {
      this.validate()
       
      if (this.valid) {
        const patient = this.createPatient()
        this.$store.dispatch('patients/EDIT_PATIENT', {...patient, id: this.$route.params.id })
        this.$router.back()
        this.showNotification('Данные пациента изменены', true)
      }
    }
  },
  mounted() {
    this.setPatientData()
  }
}
</script>