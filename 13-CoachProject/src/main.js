import { createApp } from 'vue';
import router from './router.js';
import store from './store.js';
import App from './App.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import BaseCard from './components/BaseCard.vue';
import BaseButton from './components/BaseButton.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);
app.use(router);
app.use(store);

app.component('coaches-list', CoachesList);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.mount('#app');
