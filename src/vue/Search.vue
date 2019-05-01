<template>
    <div style="margin: 100px">
            <input type="text" v-model="search" placeholder="search by ID" size="10" style="height:30px; font-size: 20px;">
            <button class="search-button" @click="search(search)">
                GO
            </button>
        
    </div>
</template>

<script>
// import store from '../store/store.js';
export default {
    data () {
    return {
      search: '',
    }
  },
  methods: {
    search (title) {
      this.$store.dispatch('search', title)
    }
  },
}
</script>

<style src="../CSS.css"></style>