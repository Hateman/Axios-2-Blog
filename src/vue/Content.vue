<template>
  <div >

    <!-- <app-header
    @post-title="getSearchingPosts">
    </app-header> -->

  <!-- <app-pagination 
  :current="currentPage" 
  :total="totalPosts" 
  :perPage="perPage" 
  :pageRange="pageRange"  
  >
  </app-pagination> -->

  <app-pagination></app-pagination>

    <header class="grid_item" >
      <h1>Blog</h1>
      <input type="text" v-model="postTitle" placeholder="TITLE" size="60"><p></p>
      <input type="text" v-model="postBody" placeholder="POST BODY" size="60"><br><p></p>
      <button v-on:click="newPost()" class="btn btn-success">Add new post</button>
      <hr>
    </header>

  <div class="my-flex-container">

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

  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';
import Header from './Header.vue';
export default {
   components: {
    'app-pagination': Pagination,
    'app-header': Header,
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
    this.getAllPostsX(this.$store.state.currentPageX);
  },
  
  methods: {
    getAllPostsX (page) {
      this.$store.dispatch('getAllPosts', page)
    },

    newPost() {
      axios.post('http://jsonplaceholder.typicode.com/posts/', {
            title: this.postTitle,
            body: this.postBody
            }).then((response) => {this.posts.splice(0,0,response.data)} )
    },
    deletePost(index) {
      axios.delete('http://jsonplaceholder.typicode.com/posts/' + index)
      .then((response) => {this.posts.splice(index,1)})
    },
    editPost(id, title, body) {
          axios.put('http://jsonplaceholder.typicode.com/posts/' + id, { title: title,  body: body, } )
          .then((response) => {})
          .catch(error => {
          console.log('-----error-------');
          console.log(error);
          })
    },
  },
  computed: {
    posts() {
      return this.$store.state.results
    },
    /* curr() {
      return this.$store.state.currentPageX
    } */
  },
}
</script>

<style src="../CSS.css"></style>