<template>
  <div :style="style"></div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  height: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 0
  }
});

const style = computed(() => {
  return { height: props.height, width: props.width };
});
</script>
