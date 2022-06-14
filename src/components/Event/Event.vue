<template>
  <div class="event">
    <div class="imgContainer">
      <img loading="lazy" :src="event.image" alt="blogPhoto" />
    </div>

    <div class="content">
      <p>
        Event name: <span>{{ event.name }}</span>
      </p>
      <Gap height="10px" />
      <p>
        Start date: <span>{{ getDate(event.startDate) }}</span>
      </p>
      <Gap height="10px" />
      <p>
        End date: <span>{{ getDate(event.endDate) }}</span>
      </p>
      <Gap height="10px" />
      <div>
        <Button label="view" @click="router.push({ name: 'EventDetails', params: { eventId: event.id } })" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue';
import Gap from '../Spacer/Gap.vue';
import { getDate } from '../../common/helpers';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(['event']);
</script>

<style lang="scss" scoped>
@import './event.scss';
</style>
