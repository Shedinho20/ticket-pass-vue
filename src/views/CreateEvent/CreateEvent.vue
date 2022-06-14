<template>
  <div class="container containerForm">
    <form>
      <InputField type="email" v-model="state.formData.name" label="Name" :error="state.formError.name" />
      <Gap height="10px" />
      <div class="dateContainer">
        <InputField
          type="date"
          v-model="state.formData.startDate"
          label="Start Date"
          :error="state.formError.startDate" />
        <Gap width="30px" />
        <InputField type="date" v-model="state.formData.endDate" label="Start Date" :error="state.formError.endDate" />
      </div>
      <Gap height="10px" />
      <TextArea rows="10" label="Event description" v-model="state.formData.desc" :error="state.formError.desc" />
      <Gap height="10px" />
      <FileInputField
        accept="image/*"
        v-model="state.formData.image"
        label="Event Image"
        :image="state.formData.image"
        :error="state.formError.image" />
      <Gap height="10px" />
      <Button label="Submit" @click.prevent="onSubmit" :isLoading="isLoading" />
    </form>
  </div>
</template>

<script setup>
import InputField from '../../components/Input/Input.vue';
import TextArea from '../../components/TextArea/TextArea.vue';
import Gap from '../../components/Spacer/Gap.vue';
import Logo from '../../components/Logo/Logo.vue';
import Button from '../../components/Button/Button.vue';
import FileInputField from '../../components/FileInputField/FileInputField.vue';
import { reactive } from 'vue';
import { validateForm, createEventValidators } from '../../common/validator';
import { useCreateEventMutation } from '../../network/Mutations/useCreatEventMutation';

const state = reactive({
  formData: {
    name: '',
    startDate: '',
    endDate: '',
    image: '',
    desc: ''
  },
  formError: {
    name: '',
    endDate: '',
    image: '',
    startDate: '',
    desc: ''
  }
});

const { createNewEvent, isLoading } = useCreateEventMutation();

const onSubmit = () => {
  const { isValid, errors } = validateForm(state.formData, createEventValidators);

  state.formError = errors;
  if (!isValid) {
    return;
  }

  createNewEvent({
    ...state.formData,
    startDate: (new Date(state.formData.startDate).getTime() / 1000).toString(),
    endDate: (new Date(state.formData.endDate).getTime() / 1000).toString()
  });
};
</script>

<style lang="scss" scoped>
@import './createEvent.scss';
</style>
