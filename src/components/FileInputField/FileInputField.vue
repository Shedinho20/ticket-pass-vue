<template>
  <div class="containerFile">
    <h3 class="label">{{ label }}</h3>
    <div class="containerInner">
      <div>
        <p v-if="!image">Choose a file</p>
        <p v-else>{{ image.name }}</p>
      </div>
      <input type="file" v-bind="$attrs" @change="$emit('update:modelValue', $event.target.files[0])" />
    </div>
    <h3 class="error">{{ error }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Inpufield'
  },
  image: {
    type: File,
    default: null
  },
  error: {
    type: String
  },
  modelValue: {
    type: File,
    default: File
  }
});
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
