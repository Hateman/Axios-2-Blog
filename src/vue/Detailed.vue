<template>
    <div>
    <div class="my-flex-container">
  <div class="flex-block">
    <img src="../img/post.jpg"/>
    <h4>Post # {{ post.id }}</h4>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body}}</p>

    <!-- Edit Menu -->

    <!-- <div class="wrapper">  
      <div class="content">
        <ul>    
          <li><input type="text" v-model="post.title" placeholder="EDIT TITLE" size="30"></li>
          <li><input type="text" v-model="post.body" placeholder="EDIT POST" size="30"></li><br>
          <li><button v-on:click="editPost(post.id, post.title, post.body)" class="btn btn-info">Confirm</button>
          <button v-on:click="deletePost( post.id )" class="btn btn-primary">Delete</button></li>
        </ul>  
      </div>
      <div class="parent">Edit</div>
    </div> -->

  </div>

  <app-latest></app-latest>
  
  </div>
      <hr>
  </div>
</template>

<script>
import Latest from './Latest.vue';
export default {
  components: {
    'app-latest': Latest,
  },
    data () {
    return {
      postTitle: '',
      postBody: '',
      newPostTitle: '',
      newPostBody: '',
      url: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },
        created() {
  },
  computed: {
    post() {
      return this.$store.getters.getResults
    },
  },
    methods: {

    // 'Edit Menu' Logic

    /* deletePost( id ) {
      axios.delete(this.url + id)
      .then((response) => {this.posts.splice(index,1)})
      this.posts.splice(index,1)
      this.$store.dispatch('deletePost', id)
    },
    editPost(id, title, body) {
          axios.put(this.url + id, { title: title,  body: body, } )
          .then(() => {})
    }, */
  },
}
</script>

<style src="../CSS.css"></style>