import { useMutation } from 'vue-query';
import { useToast } from 'vue-toast-notification';
import { useCreateEventService } from '../Services/events';
import { useRouter } from 'vue-router';

export const useCreateEventMutation = () => {
  const toast = useToast();
  const router = useRouter();
  const createEvent = useCreateEventService();

  const createEventMutation = useMutation(createEvent, {
    onError: error => {
      console.log(erroerror?.response);
      toast.open({
        message: `${error?.response?.data?.message || ERROR_MESSAGE}`,
        type: 'error',
        position: 'top-right'
      });
    },
    onSuccess: data => {
      toast.open({
        message: 'Event created successfully',
        type: 'success',
        position: 'top-right'
      });
      router.push({ name: 'Home' });
    }
  });

  const { isLoading, mutate: createNewEvent } = createEventMutation;

  return { createNewEvent, isLoading };
};
