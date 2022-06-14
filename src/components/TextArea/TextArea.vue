<template>
  <div class="containertextField">
    <h3 class="label">{{ label }}</h3>
    <textarea
      v-bind="$attrs"
      :placeholder="label"
      class="textarea"
      :value="modelValue"
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
@import './textArea.scss';
</style>
