<template>
  <div class="containerForm">
    <div class="logo"><Logo /></div>
    <form>
      <InputField type="email" v-model="state.formData.email" label="Email" :error="state.formError.email" />
      <InputField
        type="password"
        v-model="state.formData.password"
        label="Password"
        :error="state.formError.password" />
      <Button label="Login" @click.prevent="onSubmit" :isLoading="isLoading" />
    </form>
  </div>
</template>

<script setup>
import InputField from '../../components/Input/Input.vue';
import Logo from '../../components/Logo/Logo.vue';
import Button from '../../components/Button/Button.vue';
import { reactive } from 'vue';
import { validateForm, loginValidators } from '../../common/validator';
import { useLoginMutation } from '../../network/Mutations/useLoginMutation';

const state = reactive({
  formData: {
    email: '',
    password: ''
  },
  formError: {
    email: '',
    password: ''
  }
});

const { isLoading, login } = useLoginMutation();

const onSubmit = () => {
  const { isValid, errors } = validateForm(state.formData, loginValidators);

  state.formError = errors;
  if (!isValid) {
    return;
  }

  login(state.formData);
};
</script>

<style lang="scss" scoped>
@import './login.scss';
</style>
