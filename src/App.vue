<template>
  <TopNav v-if="!data.nav" />
  <div class="app">
    <router-view />
    <div class="container footerContainer" v-if="scrollData.showBottomNav">
      <Navigation />
    </div>
  </div>
</template>

<script setup>
import TopNav from './components/TopNav/TopNav.vue';
import Navigation from './components/Navigation/Navigation.vue';
import { reactive, onBeforeMount } from 'vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useScroll } from './hooks/useScroll';
import { useAuth } from './hooks/useAuth';

const route = useRoute();

const data = reactive({
  nav: null,
  showBottomNav: true
});

const scrollData = useScroll();

useAuth();

const checkRoute = () => {
  if (window.scrollY === 0) {
    data.showBottomNav = true;
  }

  if (route.name === 'Login') return (data.nav = true);
  return (data.nav = false);
};

onBeforeMount(() => {
  checkRoute();
});

watch(route, () => {
  checkRoute();
});
</script>

<style lang="scss">
@import './app.scss';
</style>
