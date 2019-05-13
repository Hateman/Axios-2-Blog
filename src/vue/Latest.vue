<template>
    <div>
      <h1 style="color:#eee; text-align: center">Latest</h1><br>
      <a href="/#/" style="color:#eee; font-size:30px">Home</a>
      <br>
        <br>
  <table style="width: 100px; text-align: center; ">

  <tr v-for="post in posts" :key='post.id' class="flex-block-latest">
      <img src="../img/post.jpg" @click="getPostId(post.id)" width="350px" height="218px"/>
    <h4>Post # {{ post.id }}</h4>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body}}</p>
    
    <div class="wrapper">
            <button @click="getPostId(post.id)" class="btn btn-success">Detailed</button>
    </div>
      <hr>
  </tr>
  </table>
    </div>

</template>

<script>
import axios from 'axios'
import {urlApi} from '../store/vars.js'
export default {
  components: {
  },
   data () {
    return {
      posts: [],
      currentPage: 25,
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
      axios.get(urlApi.url + 'posts/', options)
        .then(response => {
          this.posts = response.data
          this.currentPage = page
        })
        this.idStart = this.idEnd;
        this.idEnd = this.idEnd + 5;

    },
    getPostId (id) {
      this.$store.dispatch('getDetailedPost', id)
    },
  },
}
</script>

<style src="../CSS.css"></style>