import { createApp } from 'vue';
import App from './App.vue';
import LearningItem from './components/learning-resources/LearningItem.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TheResources from './components/learning-resources/TheResources.vue';

const app = createApp(App)
app.component('the-resources', TheResources);
app.component('learning-item', LearningItem);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
