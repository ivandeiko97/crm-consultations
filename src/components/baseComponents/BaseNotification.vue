<template>
  <v-alert :type="type ? 'success' : 'error'" width="300" class="ma-auto" transition="fab-transition">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  name: 'base-notification',
  props: {
    text: String,
    type: {
      type: Boolean,
      default: true
    }
  }
}
</script>