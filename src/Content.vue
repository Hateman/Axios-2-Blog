<template>
  <div >

  <app-pagination 
  :current="currentPage" 
  :total="totalPosts" 
  :perPage="perPage" 
  :pageRange="pageRange"  
  @page-changed="getAllPosts">
  </app-pagination>

    <header class="grid_item" >
      <br>
      <h1>Blog</h1>
      <input type="text" v-model="postTitle" placeholder="TITLE" size="60"><p></p>
      <input type="text" v-model="postBody" placeholder="POST BODY" size="60"><br><p></p>
      <button v-on:click="newPost()" class="btn btn-success">Add new post</button><p></p>
      <hr>
    </header>

  <div class="my-flex-container">

  <div v-for="(post, index) in posts" v-bind:key='post.id' class="flex-block">
    <img src="src/img/post.jpg"/>
    <h4>Post # {{ post.id }}</h4>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body}}</p>

    <div class="wrapper">  
      <div class="content">
        <ul>    
          <li><input type="text" v-model="post.title" placeholder="EDIT TITLE" size="30"></li>
          <li><input type="text" v-model="post.body" placeholder="EDIT POST" size="30"></li><br>
          <li><button v-on:click="editPost(post.id, post.title, post.body)" class="btn btn-info">Confirm</button>
          <button v-on:click="deletePost(index)" class="btn btn-primary">Delete</button></li>
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
export default {
   components: {
    'app-pagination': Pagination,
  },
   data () {
    return {
      posts: [],
      postTitle: '',
      postBody: '',
      newPostTitle: '',
      newPostBody: '',
      url: 'https://jsonplaceholder.typicode.com/posts/',
      perPage: 4,
      currentPage: 1,
      totalPosts: 100,
      pageRange: 2,
      idStart: 0,
      idEnd: 5,
    }
  },
  created() {
    this.getAllPosts(this.currentPage);
  },
  
  methods: {
    getAllPosts(page) {
        this.idEnd = page*4;
        this.idStart = this.idEnd-4;
      var options = {
        params: {
          _start: this.idStart,
          _end: this.idEnd,
        }
      }
      axios.get(this.url, options)
        .then(response => {
          this.posts = response.data
          this.currentPage = page
        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        })

        this.idStart = this.idEnd;
        this.idEnd = this.idEnd + 5;

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
          /* .catch(function(error) {
            console.log(error)
          }) */
    },
  }
}
</script>

<style src="./CSS.css"></style>