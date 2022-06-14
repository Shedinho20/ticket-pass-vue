<template>
  <div class="container homeContainer">
    <span v-if="isLoading">Loading...</span>
    <div class="home" v-else>
      <Event v-for="event in state.events" :key="event.id" :event="event" />
      <div class="pagination">
        <Paginations
          :pageSize="state.pageSize"
          :totalCount="state.totalCount"
          :currentPage="state.currentPage"
          v-on:pageChange="updateCurrentPage($event)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Event from '../../components/Event/Event.vue';
import Paginations from '../../components/Pagination/Pagination.vue';
import { reactive, ref, watch } from 'vue';
import { useQuery } from 'vue-query';
import { getEventsService } from '../../network/Services/events';

const isLoading = ref(true);

const state = reactive({ totalCount: '', pageSize: '', events: [], currentPage: 1 });

const updateCurrentPage = e => {
  state.currentPage = e;
};

const query = useQuery(
  ['events', state],
  async () => {
    const data = await getEventsService(state.currentPage);
    state.pageSize = data.data.meta.per_page;
    state.totalCount = data.data.meta.total;
    state.events = data.data.data;
    isLoading.value = false;
  },
  { keepPreviousData: true, refetchOnWindowFocus: false }
);

watch(
  () => state.events,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
);
</script>

<style lang="scss" scoped>
@import './home.scss';
</style>
