<template>
  <h1 className="logo" @click="router.push({ name: 'Home' })">ticket<span>pass</span></h1>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style lang="scss" scoped>
.logo {
  font-size: 2rem;
  font-family: 'Oxygen', sans-serif;
  cursor: pointer;
  span {
    color: var(--color-main-green);
  }
}
</style>
