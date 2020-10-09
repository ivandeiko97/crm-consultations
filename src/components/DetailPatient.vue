<template>
  <v-card
    class="d-flex flex-column align-center detailPatient pa-5"
  >
    <v-card-title>Карточка пациента</v-card-title>

    <v-card-text 
      v-if="PATIENT"
      class="d-flex flex-column align-self-center"
      style="width: 300px"
    >
      <v-row
        align="center"
        class="mx-0"
      >
        ФИО: <span class="detail-text">{{ getFullName(PATIENT) }}</span>
      </v-row>

      <v-row
        align="center"
        class="mx-0"
      >
        Дата рождения: <span class="detail-text">{{ PATIENT.birthday }}</span>
      </v-row>

      <v-row
        align="center"
        class="mx-0"
      >
        СНИЛС: <span class="detail-text">{{ PATIENT.insurance }}</span> 
      </v-row>

      <v-row class="align-self-center mt-1">
        <base-button text="удалить пациента" @click="deletePacient" />
      </v-row>
    </v-card-text>

    <v-card-title>Консультации</v-card-title>

    <consultations-table :userId="$route.params.id" />
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

import ConsultationsTable from './ConsultationsTable'
import { getFullName } from '@/helpers'

export default {
  name: 'detail-patient',
  components: {
    ConsultationsTable
  },
  computed: {
    ...mapGetters('patients', ['PATIENT']),
  },
  methods: {
    getFullName,
    deletePacient() {
      this.$store.dispatch('patients/DELETE_PATIENT', this.PATIENT.id)
      this.$router.push('/')
    }
  },
  mounted() {
    this.$store.dispatch('consultations/GET_CONSULTATIONS', this.$route.params.id)
  }
}
</script>

<style scoped>
.detail-text {
  color: #1d1d1d;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
}
.detailPatient {
  max-width: 600px;
  width: 100%;
  margin: auto;
}
</style>