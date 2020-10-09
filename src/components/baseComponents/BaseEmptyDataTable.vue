<template>
  <div>
    <span> {{ text }}</span>
    <v-btn
      @click="$emit('click')"
      class="mx-2"
      fab
      dark
      small
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'empty-data-table',
  props: {
    text: {
      type: String,
      default: 'нет пациентов, вы можете добавить пациента' 
    }
  }
}
</script>