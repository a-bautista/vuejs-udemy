import { createApp } from 'vue';

import App from './App.vue';
import RatingControl from './components/RatingControl.vue';

const app = createApp(App);
app.component('rating-control', RatingControl);

app.mount('#app');
