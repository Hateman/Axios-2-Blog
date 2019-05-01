<template>
<div>
<!--   <app-header
    @post-title="getSearchingPosts">
  </app-header> -->
  <app-search></app-search>
  <router-view></router-view>
  
</div>
</template>

<script>
// import Content from './Content.vue';
// import Header from './Header.vue';
import Search from './Search.vue';

export default {
  components: {
    // 'app-content': Content,
    // 'app-header': Header,
    'app-search': Search,
  },
}

</script>

<style></style>
