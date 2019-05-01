<template>
<div>
    <h1 style="color:#eee; margin: 30px">Results</h1>
    <div v-for="post in posts" :key='post.id' class="flex-block">
    <router-link :to="{ name: 'detailed', params: { id: post.id -1 } }">
    <img src="../img/post.jpg"/>
    </router-link>
    <h4><span style="color:#98FB98">Post #</span> {{ post.id }}</h4>
    <h3><span style="color:#98FB98">Title:</span> {{ post.title }}</h3>
    <p><span style="color:#98FB98">Body:</span> <br>{{ post.body}}</p>
    
    <div class="wrapper">
          <router-link :to="{ name: 'detailed', params: { id: post.id - 1} }">
            <button class="btn btn-success">Detailed</button>
          </router-link>  
    </div>
      <hr>
  </div>
  </div>
</template>

<script>
export default {
    computed: {
    posts() {
      return this.$store.state.results
    }
  },
}
</script>

  