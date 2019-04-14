
import Vue from 'vue'
import App from './vue/App.vue'
import VueRouter from 'vue-router'

// var Vue = require ('vue')
// var VueRouter = require ('vue-router')
// var App = require ('./vue/App.vue')
// var Content = require ('./vue/Content.vue')
// var Pagination = require ('./vue/Pagination.vue')
var Detailed = require ('./vue/Detailed.vue')
// var Header = require ('./vue/Header.vue')

Vue.use(VueRouter)

var router = new VueRouter ({
    routes: [
        { path: '/detailed', component: Detailed },
    ]
})

 new Vue({
 el: '#app',
 router: router,
 render: h => h(App)
 });

 