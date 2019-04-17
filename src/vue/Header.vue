<template>
    <div class="container-header">
        <div class="block-header"><a href="/#/">Home</a></div>
        <div class="block-header"><a href="/#/latest">Latest</a></div>
        <router-link :to="{ name: 'detailed', params: { id: 2 } }">
        <div class="block-header"><a href="#">Detailed</a></div>
        </router-link>
        <div class="block-header"><a href="#">About</a></div>
        <div class="block-header">
            <input type="text" v-model="postTitle" placeholder="search by ID" size="10" style="height:30px; font-size: 20px;">
            <button class="search-button" @click="search(postTitle)">
                GO
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
      postTitle: '',
    }
  },
  methods: {
    search (title) {
      this.$emit('post-title', title)
    }
  },
}
</script>

<style src="../CSS.css"></style>