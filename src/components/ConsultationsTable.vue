<template>
  <v-card>
    <v-card-title>
      <base-button
        text="Добавить консультацию"
        @click="$router.push({name: 'add-consultation', params: { userId }})"
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="CONSULTATIONS"
      disable-sort
      hide-default-footer
      class="consultationsTable"
    >
      <template #no-data>
        <base-empty-data-table 
          text="нет консультаций, вы можете добавить консультацию"
          @click="$router.push({name: 'add-consultation', params: {userId}})"
        />
      </template>
      <template #item.symptoms="{ item }">
        <span>{{item.symptoms ? item.symptoms : 'симптомы не указаны'}}</span>
      </template>

      <template #item.actions="{ item }">
        <base-actions-list 
          :actions="actions"
          @delete="deleteConsultation(item.id)"
          @edit="editConsultation(item.id)"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'consultations-table',
  props: {
    userId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      headers: [
        { text: 'Дата консультации', align: 'start', value: 'timeReceipt'},
        { text: 'Симптомы', value: 'symptoms' },
        { text: 'Действия', value: 'actions' },
      ],
      actions: [
        {
          title: 'редактировать',
          action: 'edit'
        },
        {
          title: 'удалить',
          action: 'delete'
        },
      ]
    }
  },
  computed: {
    ...mapGetters('consultations', ['CONSULTATIONS']),
  },
  methods: {
    deleteConsultation(id) {
      this.$store.dispatch('consultations/DELETE_CONSULTATION', {
        id,
        userId: this.$route.params.id
      })
    },
    editConsultation(id) {
      this.$router.push({name: 'edit-consultation', params: {
        id,
        userId: this.$route.params.id
      }})
    }
  }
}
</script>

<style scoped>
.consultationsTable {
  min-height: 250px;
  min-width: 320px;
}
</style>
