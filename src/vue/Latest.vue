<template>
    <div>
      <h1 style="color:#eee; text-align: center">Latest</h1><br>
      <a href="/#/" style="color:#eee; font-size:30px">Home</a>
      <br>
        <br>
  <!-- ================================================================================================================================== -->

  <!-- ================================================================================================================================== -->
  <!-- <div class="my-flex-container-latest"> -->
  <table style="width: 100px; text-align: center; ">

  <tr v-for="post in posts" :key='post.id' class="flex-block-latest">
    <router-link :to="{ name: 'detailed', params: { id: post.id -1 } }">
    <img src="../img/post.jpg" @click="getPostId(post.id)" width="350px" height="218px"/>
    </router-link>
    <h4>Post # {{ post.id }}</h4>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body}}</p>
    
    <div class="wrapper">
          <router-link :to="{ name: 'detailed', params: { id: post.id - 1} }">
            <button @click="getPostId(post.id)" class="btn btn-success">Detailed</button>
          </router-link>  
    </div>

      <hr>
  </tr>
  
  </table>
  <!-- </div> -->
  <!-- ================================================================================================================================== -->
    </div>

</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
  components: {
    'app-header': Header,
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
      currentPage: 25,
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
        this.idStart = this.idEnd-3;
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
    getPostId (id) {
      this.$emit('post-id', id)
    },
  },
}
</script>

<style src="../CSS.css"></style>