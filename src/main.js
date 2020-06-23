import Vue from 'vue'
import App from './App.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue';

Vue.component('menu-icon', MenuIcon);

new Vue({
  el: '#app',
  render: h => h(App)
})
