import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Login from '../views/Login/Login.vue';
import EventDetails from '../views/EventsDetails/EventsDetail.vue';
import CreateEvent from '../views/CreateEvent/CreateEvent.vue';

const routes = [
  { path: '/', component: Home, name: 'Home', meta: { title: 'Home' } },
  { path: '/login', component: Login, name: 'Login', meta: { title: 'Login', Auth: true } },
  { path: '/create-event', component: CreateEvent, name: 'CreateEvent', meta: { title: 'CreateEvent', Auth: true } },
  { path: '/event-details/:eventId', component: EventDetails, name: 'EventDetails', meta: { title: 'Event-Detials' } }
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Blogs`;
  next();
});

router.beforeEach((to, from, next) => {
  const authLocal = localStorage.getItem('auth');
  let auth = null;
  if (authLocal) {
    auth = JSON.parse(authLocal);
  }

  if (to.matched.some(res => res.meta.Auth)) {
    if (auth) {
      if (to.name === 'Login') {
        return next({ name: 'Home' });
      }

      return next();
    } else {
      if (to.name === 'CreateEvent') {
        return next({ name: 'Login' });
      }
    }

    return next();
  }
  return next();
});
