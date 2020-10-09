<template>
  <v-btn 
    :color="color"
    @click="$emit('click')"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    text: String,
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>