import axios from 'axios';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useLogout } from '../../hooks/useLogout';

const baseURL = process.env.NODE_ENV === 'production' ? 'prod_url from env' : 'http://localhost:8000';

export const axiosService = axios.create({ baseURL });

const axiosPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
});

export const useAxiosPrivate = () => {
  const store = useStore();
  const logout = useLogout();

  const auth = store.getters.getAuth;

  axiosPrivate.interceptors.request.use(async req => {
    if (auth?.access_token && auth?.exp) {
      const expDate = new Date(auth.exp);

      if (expDate > new Date()) {
        req.headers.Authorization = `Bearer ${auth?.access_token}`;
        return req;
      }
    }

    logout();
  });

  return axiosPrivate;
};
