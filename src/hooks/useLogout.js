import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export const useLogout = () => {
  const store = useStore();
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    store.dispatch('setAuth', null);
    router.push({ name: 'Home' });
  };

  return logout;
};
