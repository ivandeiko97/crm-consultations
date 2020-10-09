<template>
  <v-radio-group
    :value="value"
    :rules="rules"
    @change="$emit('change', $event)"
    row
  >
    <v-radio
      label="Мужчина"
      value="Мужчина"
    />
    <v-radio
      label="Женщина"
      value="Женщина"
    />
  </v-radio-group>
</template>

<script>
export default {
  name: 'radio-male',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    rules: {
      type: Array,
      default: () => []
    }
  }
}
</script>