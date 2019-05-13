import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {urlApi} from '../store/vars.js'


Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        results: [],
        currentPageX: '',
        detailedId: '',
    },
    getters: {
        getResults: state => state.results,
        getCurrent: state => state.currentPageX,
        getDetailedPost: state => state.detailedId,
    },
    mutations: {
        setResults (state, { type, items }) {
            state[type] = items
        },
        setCurrent (state, page) {
            state.currentPageX = page
        },
        setGetDetailedPost (state, id) {
            state.detailedId = id
        },
        setDeletePost (state, index) {
            state.results.splice(index-1,1)
        },
    },
    actions: {
        searching ( { commit }, searchId) {
            var options = {
                params: {
                  id: searchId,
                }
            }
                axios.get(urlApi.url + 'posts/', options)
                .then(response => {
                const results = response.data
                commit ('setResults', { type: 'results', items: results})
                })
        },

        getAllPosts ( { commit }, page ) {
            var options = {
                params: {
                _start: (page*4)-4,
                _end: page*4,
                }
            }
            axios.get(urlApi.url + 'posts/', options)
                .then(response => {
                const results = response.data
                
                commit ('setResults', { type: 'results', items: results})
                commit ('setCurrent', page )
                })
        },
        getDetailedPost ( {commit}, id ) {
            axios.get(urlApi.url + 'posts/' + id)
            .then(response => {
              const results = response.data
              
              commit ('setResults', { type: 'results', items: results})
            })
        },
        deletePost ( {commit}, id ) {
            commit ('setDeletePost', id )
        },

    },
})


export default store