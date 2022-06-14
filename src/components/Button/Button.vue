<template>
  <button :class="{ outline: props.outLine, loading: props.isLoading }">{{ label }}</button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Inpufield'
  },
  outLine: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
@import './buton.scss';
</style>
