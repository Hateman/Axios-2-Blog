import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// const url = 'https://jsonplaceholder.typicode.com/posts/'
const store = new Vuex.Store ({
    state: {
        results: []
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
        }
    },
    actions: {
        search( { commit }, search) {
            var options = {
                params: {
                  id: search,
                }
            }
            const url = 'https://jsonplaceholder.typicode.com/posts/'
                    axios.get(url, options)
                .then(response => {
                const results = response.data
                // state.results = results
                    commit('set', { type: 'results', items: results})
                })
        }

    },
})


export default store