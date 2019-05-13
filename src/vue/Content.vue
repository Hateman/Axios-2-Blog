<template>
  <div >

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
    <router-link :to="{ name: 'detailed' }">
    <img @click="getPostId(post.id)" src="../img/post.jpg"/>
    </router-link>
    <h4><span style="color:#98FB98">Post #</span> {{ post.id }}</h4>
    <h3><span style="color:#98FB98">Title:</span> {{ post.title }}</h3>
    <p><span style="color:#98FB98">Body:</span> <br>{{ post.body}}</p>
    
    <div class="wrapper">
          <router-link :to="{ name: 'detailed' }">
            <button class="btn btn-success" @click="getPostId(post.id)">Detailed</button>
          </router-link>  
    </div>

    <div class="wrapper">  
      <div class="content">
        <ul>    
          <li><input type="text" v-model="post.title" placeholder="EDIT TITLE" size="30"></li>
          <li><input type="text" v-model="post.body" placeholder="EDIT POST" size="30"></li><br>
          <li><button v-on:click="editPost(post.id, post.title, post.body)" class="btn btn-info">Confirm</button>
          <button v-on:click="deletePost( post.id )" class="btn btn-primary">Delete</button></li>
        </ul>  
      </div>
      <div class="parent">Edit</div>
    </div>

      <hr>
  </div>
  
  </div>

  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';
import {urlApi} from '../store/vars.js';
export default {
   components: {
    'app-pagination': Pagination,
  },
   data () {
    return {
      postTitle: '',
      postBody: '',
      newPostTitle: '',
    }
  },
  created() {
    this.getAllPostsX(1);
  },
  
  methods: {

    getPostId (id) {
      this.$store.dispatch('getDetailedPost', id)
    },

    deletePost ( id ) {
      this.$store.dispatch('deletePost', id)
    },

    getAllPostsX (page) {
      this.$store.dispatch('getAllPosts', page)
    },

    newPost() {
      axios.post(urlApi.url + 'posts/', {
            title: this.postTitle,
            body: this.postBody 
            })
            .then((response) => {this.posts.splice(0,0,response.data)} )
    },
    editPost(id, title, body) {
          axios.put(urlApi.url + 'posts/' + id, { title: title,  body: body, } )
          .then(() => {})
    },
  },
  computed: {
    posts() {
      return this.$store.getters.getResults
    },
  },
}
</script>

<style src="../CSS.css"></style>