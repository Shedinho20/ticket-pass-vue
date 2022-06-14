import { createApp } from 'vue';
import App from './App.vue';
import { router } from './route';
import { store } from './store';
import { VueQueryPlugin } from 'vue-query';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueQueryPlugin);
app.use(VueToast);

app.mount('#app');
