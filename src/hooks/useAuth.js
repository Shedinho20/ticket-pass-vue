import { useLogout } from '../hooks/useLogout';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {
  const logout = useLogout();
  const store = useStore();

  const authLocal = localStorage.getItem('auth');
  onMounted(() => {
    if (authLocal) {
      const auth = JSON.parse(authLocal);
      const expDate = new Date(auth.exp);

      if (expDate < new Date()) {
        //we can hit the refesh endPoint here to try refreshing token (In this test, refesh endpoint is not provided, so we logout user)
        logout();
      } else {
        store.dispatch('setAuth', auth);
      }
      return;
    }

    logout();
  });

  return { authLocal };
};
