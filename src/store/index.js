import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      auth: null
    };
  },

  getters: {
    getAuth(state) {
      return state.auth;
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.auth = payload;
    }
  },
  actions: {
    setAuth(context, payload) {
      context.commit('setAuth', payload);
    }
  }
});
