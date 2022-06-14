<template>
  <div class="container topNav">
    <Logo />
    <div>
      <Navigation />
    </div>
  </div>
</template>

<script setup>
import Logo from '../Logo/Logo.vue';
import Navigation from '../Navigation/Navigation.vue';
</script>

<style lang="scss" scoped>
@import './topNav.scss';
</style>
