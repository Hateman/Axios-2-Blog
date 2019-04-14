<template>
<div>
  <!-- <router-view></router-view> -->
  <app-content></app-content>
</div>
</template>

<script>
import Content from './Content.vue';
// import VueRouter from 'vue-router';

export default {
  components: {
    'app-content': Content,
    // 'router-view': VueRouter,
  },
}

</script>

<style></style>
