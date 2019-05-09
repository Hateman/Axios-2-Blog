<template>
    <div style="margin: 100px">
            <input type="text" v-model="search" placeholder="search by ID" size="10" style="height:30px; font-size: 20px;">
            <button class="search-button" @click="searching(search)">
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
    searching (search) {
      this.$store.dispatch('search', search)
    }
  },
}
</script>

<style src="../CSS.css"></style>