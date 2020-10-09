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
        text="Добавить" 
        @click="addPatient"
        class="mt-3"
      />
    </v-form>
  </v-card>
</template>

<script>
import mixinEditOrAddPatient from '@/mixins/mixinEditOrAddPatient'

export default {
  name: 'add-patient',
  mixins: [mixinEditOrAddPatient],
  methods: {
    addPatient() {
      this.validate()

      if (this.valid) {
        const patient = this.createPatient()
        this.$store.dispatch('patients/ADD_NEW_PATIENT', patient)
        this.clearData()
        this.$router.back()
        this.showNotification('Пациент был добавлен', true)
      }
    }
  }
}
</script>