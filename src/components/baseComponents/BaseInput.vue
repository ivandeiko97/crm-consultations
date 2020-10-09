<template>
  <v-text-field
    :value="value"
    :rules="rules"
    :label="label"
    :required="required"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'base-input',
  props: {
    value: String,
    rules: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    }
  },
}
</script>