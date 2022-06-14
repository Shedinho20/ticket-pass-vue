<template>
  <span v-if="isLoading">Loading...</span>
  <div class="eventDetailsContainer" v-else>
    <div class="imgContainer">
      <img :src="state.event.image" alt="event-details" />
    </div>
    <Gap height="40px" />
    <h3>{{ state.event.name }}</h3>
    <div class="container content">
      <p>
        Description : <span>{{ state.event.description }}</span>
      </p>
      <Gap height="10px" />
      <p>
        Start date : <span>{{ getDate(state.event.startDate) }}</span>
      </p>
      <Gap height="10px" />
      <p>
        End date : <span>{{ getDate(state.event.endDate) }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import Gap from '../../components/Spacer/Gap.vue';
import { useQuery } from 'vue-query';
import { getEventService } from '../../network/Services/events';
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { getDate } from '../../common/helpers';

const route = useRoute();

const state = reactive({
  event: []
});

const { isLoading } = useQuery(['events', route.params.eventId], async () => {
  const data = await getEventService(route.params.eventId);
  state.event = data.data.data;
});
</script>

<style lang="scss" scoped>
@import './eventDetails.scss';
</style>
