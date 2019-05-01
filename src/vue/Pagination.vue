<template>
    <div class="pagination">
      <div class="pagination_left">
        <a href="#" v-if="hasPrev()" @click="changePageX(prevPage)">Previous</a>
      </div>
      <div class="pagination_mid">
        <ul>
          <li v-if="hasFirst()"><a href="#" @click="changePageX(1)">1</a></li>
          <li v-if="hasFirst()"> 
            <span class="jump" style="color:#eee; font-size:25px">&lArr;</span> 
          </li>
          <li v-for="page in pages" v-bind:key='page'>
            <a href="#" @click="changePageX(page)" :class="{ current: current == page }">
              {{ page }}
            </a>
          </li>
          <li v-if="hasLast()"> 
              <span class="jump" style="color:#eee; font-size:25px">&rArr;</span>  
          </li>
          <li v-if="hasLast()"><a href="#" @click="changePageX(totalPages)">{{ totalPages }}</a></li>
        </ul>
      </div>
      <div class="pagination_right">
        <a href="#" v-if="hasNext()" @click="changePageX(nextPage)">Next</a>
      </div>
    </div>
 </template>  

<script>
export default {
    props: {
    
  },
    data() {
      return {
      current: this.$store.state.currentPageX,  
      perPage: 4,
      total: 100,
      pageRange: 2,
      }
    },
    
    
  
  computed: {
    pages: function () {
      var pages = []
      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    rangeStart: function () {
      var start = this.current - this.pageRange
      return (start > 0) ? start : 1
    },
    rangeEnd: function () {
      var end = this.current + this.pageRange
      return (end < this.totalPages) ? end : this.totalPages
    },
    totalPages: function () {
      return Math.ceil(this.total/this.perPage)
    },
    nextPage: function() {
      return this.current + 1
    },
    prevPage: function() {
      return this.current - 1
    }
  },
  methods: {
    hasFirst: function () {
      return this.rangeStart !== 1
    },
    hasLast: function () {
      return this.rangeEnd < this.totalPages
    },
    hasPrev: function () {
      return this.current > 0
    },
    hasNext: function () {
      return this.current < this.totalPages
    },
    /* changePage: function(page) {
      this.$emit('page-changed', page) */
    
//  ================================================================================================================== 
    changePageX (page) {
      this.$store.dispatch('getAllPosts', page)
    },
  },
}
</script>

<style src="../CSS.css"></style>
