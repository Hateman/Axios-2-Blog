<template>
    <div>
        <!-- <app-header></app-header> -->
    <div class="my-flex-container">
  <!-- ================================================================================================================================== -->
  <div class="flex-block">
    <img src="../img/post.jpg"/>
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
  </div>
  <!-- ================================================================================================================================== -->
  <!-- <div class="flex-block-latest"> -->

  <app-latest
  @post-id="getDetailedPost">
  </app-latest>
  
  <!-- </div> -->
  <!-- ================================================================================================================================== -->
  </div>

      <hr>
  </div>
</template>

<script>
import axios from 'axios';
import Latest from './Latest.vue';
import Header from './Header.vue';
export default {
  components: {
    'app-latest': Latest,
    'app-header': Header,
  },
    data () {
    return {
      post: '',
      postTitle: '',
      postBody: '',
      newPostTitle: '',
      newPostBody: '',
      url: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },
    // props: {
    //   id: {
    //     type: Number,
    //     default: 2,
    //   }
    // },
    created() {
    this.getDetailedPost( this.$route.params.id + 1 );
  },
    methods: {
    getDetailedPost(id) {
      axios.get(this.url + id)
        .then(response => {
          this.post = response.data
          // console.log(response.data)
        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        })
        this.idStart = this.idEnd;
        this.idEnd = this.idEnd + 5;
    },
    deletePost(index) {
      axios.delete('http://jsonplaceholder.typicode.com/posts/' + index)
      .then((response) => {this.posts.splice(index,1)})
    },
    editPost(id, title, body) {
          axios.put('http://jsonplaceholder.typicode.com/posts/' + id, { title: title,  body: body, } )
          .then((response) => {})
          .catch(function(error) {
            console.log(error)
          })
    },
  }
}
</script>

<style src="../CSS.css"></style>