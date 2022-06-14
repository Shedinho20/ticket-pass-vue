<template>
  <ul class="paginationContainer">
    <li v-for="(pageNmuber, i) in state.range" :key="i">
      <button :class="{ active: currentPage === pageNmuber }" @click="setCurrentPage(pageNmuber)">
        {{ pageNmuber }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { usePagination, DOTS } from './usePagniation';
import { reactive, onMounted, watch, defineEmits } from 'vue';

const state = reactive({
  range: []
});

const props = defineProps({
  totalCount: {
    type: Number
  },
  pageSize: {
    type: Number
  },
  currentPage: {
    type: Number
  }
});

const emit = defineEmits(['pageChange']);

const setCurrentPage = pageNmuber => {
  if (pageNmuber === DOTS) return;
  emit('pageChange', pageNmuber);
};

const pages = () => {
  const paginationRange = usePagination({ ...props });
  state.range = paginationRange;
};

onMounted(() => {
  pages();
});

watch(
  () => props.currentPage,
  () => {
    pages();
  }
);
</script>

<style lang="scss" scoped>
@import './pagination.scss';
</style>
