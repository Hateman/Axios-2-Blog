<template>
  <div id="app">
    <header>
      <h1>Blog</h1>
      <input type="text" v-model="postTitle" placeholder="TITLE" size="60"><p></p>
      <input type="text" v-model="postBody" placeholder="POST BODY" size="60"><br><p></p>
      <button v-on:click="newPost()" class="btn btn-success">Add new post</button><p></p>
      <hr>
    </header>
    <main>

  <div v-for="(post, index) in posts">
    <h4>Post # {{ post.id }}</h4>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body}}</p>

    <div class="wrapper">  
      <div class="content">
        <ul>    
          <li><input type="text" v-model="post.title" placeholder="EDIT TITLE" size="30"></li>
          <li><input type="text" v-model="post.body" placeholder="EDIT POST" size="30"></li><br><br>
          <li><button v-on:click="editPost(post.id, post.title, post.body)" class="btn btn-info">Confirm</button></li>
          <li><button v-on:click="deletePost(index)" class="btn btn-primary">Delete</button></li>
        </ul>  
      </div>
      <div class="parent">Edit</div>
    </div>

      <hr>
  </div>


<!--   <div v-for="(post, index) in posts">
    <h4>Post # {{ post.id }}</h4>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body}}</p>
    <input type="text" v-model="post.title" placeholder="EDIT TITLE" size="60"><p></p>
    <input type="text" v-model="post.body" placeholder="EDIT POST" size="60"><p></p>
    <button v-on:click="editPost(post.id, post.title, post.body)" class="btn btn-info">Edit</button>
    <button v-on:click="deletePost(index)" class="btn btn-primary">Delete</button>
    <hr>
  </div> -->
  
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: [],
      postTitle: '',
      postBody: '',
      newPostTitle: '',
      newPostBody: '',
      url: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },

  created() {
    this.getAllPosts();
  },

  methods: {
    getAllPosts() {
      axios.get(this.url)
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        })
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
          axios.put('http://jsonplaceholder.typicode.com/posts/' + id,
          {
            title: title,
            body: body,
          })
          .then((response) => {})
          /* .catch(function(error) {
            console.log(error)
          }) */
    },
  }
}
</script>

<style src="./CSS.css"></style>
