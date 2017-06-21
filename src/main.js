import Vue from 'vue'
import App from './App.vue'
import {store} from './store';

console.log(store);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
