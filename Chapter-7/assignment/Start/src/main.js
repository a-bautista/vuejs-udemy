import Vue from 'vue'
import App from './components/App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerList from './components/ServerList.vue'
import DetailedServer from './components/DetailedServer.vue';


// register your components globally
Vue.component('header-component', Header);
Vue.component('footer-component', Footer);
Vue.component('server-list', ServerList);
Vue.component('detailed-server',DetailedServer);

new Vue({
  el: '#app',
  render: h => h(App)
})
