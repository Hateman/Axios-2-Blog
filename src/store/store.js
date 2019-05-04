import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// const url = 'https://jsonplaceholder.typicode.com/posts/'
const store = new Vuex.Store ({
    state: {
        results: [],
        currentPageX: '',
    },
    getters: {
        getResults: state => state.results,
        getCurrent: state => state.currentPageX
    },
    mutations: {
        setResults(state, { type, items }) {
            state[type] = items
        },
        setCurrent(state, page) {
            state.currentPageX = page
        }
    },
    actions: {
        searching ( { commit }, searchId) {
            var options = {
                params: {
                  id: searchId,
                }
            }
            const url = 'https://jsonplaceholder.typicode.com/posts/'
                axios.get(url, options)
                .then(response => {
                const results = response.data
                commit('setResults', { type: 'results', items: results})
                })
        },

        getAllPosts( { commit }, page ) {
            var options = {
                params: {
                _start: (page*4)-4,
                _end: page*4,
                }
            }
          const url = 'https://jsonplaceholder.typicode.com/posts/'
          axios.get(url, options)
            .then(response => {
              const results = response.data
              
              commit('setResults', { type: 'results', items: results})
              commit('setCurrent', page )
            })
        },

    },
})


export default store