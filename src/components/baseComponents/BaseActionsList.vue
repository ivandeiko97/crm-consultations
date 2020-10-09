<template>
  <v-list-group>
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>Действия</v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item
      v-for="({ title, action }) in actions"
      :key="title"
      link
      class="d-flex justify-start"
      @click="$emit(action)"
    >
      <v-list-item-title v-text="title"></v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: 'actions-list',
  props: {
    actions: {
      type: Array,
      required: true,
      validator: actions => {
        let keyChecked = ['title', 'action']
        return actions.every(act => {
          const actKeys = Object.keys(act)
          return keyChecked.every(k => actKeys.includes(k))
        })
      }
    }
  }
}
</script>