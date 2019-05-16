
import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../vue/Content.vue'
import Detailed from '../vue/Detailed.vue'
import Latest from '../vue/Latest.vue'

Vue.use(VueRouter)

export function createRouter () {
    return new VueRouter ({
        routes: [
            { path: '/detailed/id', name: 'detailed', component: Detailed },
            { path: '/latest', name: 'latest', component: Latest },
            { path: '/', name: 'content', component: Content },
        ]
    })
    }