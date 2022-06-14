import { useMutation } from 'vue-query';
import { useToast } from 'vue-toast-notification';
import { loginService } from '../Services/auth';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const useLoginMutation = () => {
  const toast = useToast();
  const store = useStore();
  const router = useRouter();

  const loginMutation = useMutation(loginService, {
    onError: error => {
      toast.open({
        message: `${error?.response?.data?.message || ERROR_MESSAGE}`,
        type: 'error',
        position: 'top-right'
      });
    },
    onSuccess: data => {
      const localData = { ...data.data, exp: new Date(new Date().getTime() + data.data.expires_in) };
      localStorage.setItem('auth', JSON.stringify(localData));

      store.dispatch('setAuth', localData);
      router.push({ name: 'Home' });
    }
  });

  const { isLoading, mutate: login } = loginMutation;

  return { login, isLoading };
};
