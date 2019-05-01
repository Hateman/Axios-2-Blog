import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// const url = 'https://jsonplaceholder.typicode.com/posts/'
const store = new Vuex.Store ({
    state: {
        results: [],
        currentPageX: 1,
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
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
                commit('set', { type: 'results', items: results})
                })
        },

        getAllPosts( { commit }, page ) {
            this.state.currentPageX = page
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
              
              commit('set', { type: 'results', items: results})
            })
            .catch(error => {
              console.log('-----error-------');
              console.log(error);
            })
        },

    },
})


export default store