<template>
  <router-view />
</template>

<script>

export default {
  name: 'patients',
  mounted() {
    this.$store.dispatch('patients/GET_PATIENTS')
  }
}
</script>
