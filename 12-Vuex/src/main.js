import { createApp } from 'vue';
import store from './store.js';

import ChangeCounter from './components/ChangeCounter.vue';
import Favorite from './components/Favorite.vue';
import UserAuth from './components/UserAuth.vue';

import App from './App.vue';

const app = createApp(App);
app.use(store);

app.component('user-auth', UserAuth);
app.component('change-counter', ChangeCounter);
app.component('favorite', Favorite);
app.mount('#app');
