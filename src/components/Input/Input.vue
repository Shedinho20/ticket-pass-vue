<template>
  <div class="containerInput">
    <h3 class="label">{{ label }}</h3>
    <input
      :placeholder="label"
      v-bind="$attrs"
      :value="modelValue"
      class="input"
      @input="$emit('update:modelValue', $event.target.value)" />
    <h3 class="error">{{ error }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Inpufield'
  },
  error: {
    type: String
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
});
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
