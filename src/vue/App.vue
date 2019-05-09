<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
  
</div>
</template>

<script>
import Content from './Content.vue';
import Header from './Header.vue';

export default {
  components: {
    'app-content': Content,
    'app-header': Header,
  },
}

</script>

<style></style>
