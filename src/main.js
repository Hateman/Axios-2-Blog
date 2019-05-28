
import Vue from 'vue'
import App from './vue/App.vue'
import store from './store/store.js';
import { createRouter } from './store/router.js';
const router = createRouter()

 new Vue({
 el: '#app',
 render: h => h(App),
 router,
 store,
 });

 