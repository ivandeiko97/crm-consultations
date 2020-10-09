<template>
  <v-alert 
    :type="type ? 'success' : 'error'" 
    class="notification"
  >
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

<style scoped>
  .notification {
    z-index: 1;
    position: absolute;
    width: 300px;
    left: calc(50% - 150px);
    top: -10px;
  }
</style>