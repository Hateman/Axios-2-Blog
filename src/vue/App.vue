<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
  
</div>
</template>

<script>
import Content from './Content.vue';
import Header from './Header.vue';
import Search from './Search.vue';
import Results from './Results.vue';

export default {
  components: {
    'app-content': Content,
    'app-header': Header,
    'app-search': Search,
    'app-results': Results,
  },
}

</script>

<style></style>
