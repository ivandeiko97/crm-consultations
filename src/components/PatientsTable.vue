<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск (Имя/СНИЛС)"
        single-line
        hide-details
      />
      <base-button
        @click="$router.push({ name: 'add-patient' })"
        text="Добавить пациента"
        class="ml-4 mt-3"
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="PATIENTS"
      disable-sort
      hide-default-footer
      class="table"
    >
      <template #item.fullName="{ item }">
        {{ getFullName(item) }}
      </template>
      <template #no-data>
        <base-empty-data-table @click="$router.push({name: 'add-patient'})"/>
      </template>
      <template #item.actions="{ item }">
        <base-actions-list
          :actions="actions"
          @delete="$store.dispatch('patients/DELETE_PATIENT', item.id)"
          @edit="$router.push({ name: 'edit-patient', params: { id: item.id }})"
          @detail="$router.push({ name: 'detail-patient', params: { id: item.id }})"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

import { getFullName } from '@/helpers'

export default {
  name: 'patients-table',
  data() {
    return {
      headers: [
        { text: 'Полное имя пациента', align: 'start', value: 'fullName'},
        { text: 'Дата рождения', value: 'birthday' },
        { text: 'Пол пациента', value: 'male' },
        { text: 'СНИЛС', value: 'insurance' },
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
        {
          title:'подробнее',
          action: 'detail'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('patients', ['PATIENTS']),
    search: {
      get() {
        return this.$store.state.patients.search
      },
      set(search) {
        this.$store.dispatch('patients/CHANGE_SEARCH', search)
      }
    }
  },
  methods: {
    getFullName,
  }
}
</script>

<style scoped lang="scss">
  .table {
    min-height: 300px;
  }
</style>