<template>
    <div class="container-header">
        <div class="block-header"><a href="/#/" @click="changePageX(1)">Home</a></div>
        
        <div class="block-header"><a href="/#/latest">Latest</a></div>
        
        <router-link :to="{ name: 'detailed' }">
        <div class="block-header" @click="getPostId(5)" ><a href="#">Detailed</a></div>
        </router-link>

        <div class="block-header"><a href="#">About</a></div>
        
        <div class="block-header">
            <input type="text" v-model="searchId" placeholder="search by ID" size="10" style="height:30px; font-size: 20px;">
            <button class="search-button" @click="searching()">
                GO
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
      searchId: '',
    }
  },
  methods: {
    searching () {
      this.$store.dispatch('searching', this.searchId)
    },
    changePageX (page) {
      this.$store.dispatch('getAllPosts', page)
  },
  getPostId (id) {
      this.$store.dispatch('getDetailedPost', id)
    },
  },
}
</script>

<style src="../CSS.css"></style>