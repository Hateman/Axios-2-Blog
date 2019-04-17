
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './vue/App.vue'
import Content from './vue/Content.vue'
import Detailed from './vue/Detailed.vue'


// var Vue = require ('vue')
// var VueRouter = require ('vue-router')
// var App = require ('./vue/App.vue')
// var Pagination = require ('./vue/Pagination.vue')
// var Header = require ('./vue/Header.vue')
// var Content = require ('./vue/Content.vue')
// var Detailed = require ('./vue/Detailed.vue')

Vue.use(VueRouter)

var router = new VueRouter ({
    routes: [
        { path: '/detailed', component: Detailed },
        { path: '/', component: Content },
    ]
})

 new Vue({
 el: '#app',
 router: router,
 render: h => h(App)
 });

 