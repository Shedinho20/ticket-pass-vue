<template>
  <div class="nav">
    <Button label="Create Event" @click="router.push({ name: 'CreateEvent' })" />
    <Gap width="10px" />
    <Button label="Login" v-bind:outLine="true" @click="router.push({ name: 'Login' })" v-if="!auth" />
    <Gap width="10px" />
    <Button label="Sign out" v-bind:outLine="true" v-if="auth" @click="logout" />
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue';
import Gap from '../Spacer/Gap.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useLogout } from '../../hooks/useLogout';

const store = useStore();
const router = useRouter();

const logout = useLogout();

const auth = computed(() => {
  return store.getters.getAuth;
});
</script>

<style lang="scss" scoped>
.nav {
  width: max-content;
  display: flex;
}
</style>
