<template>
  <div class="d-flex flex-column min-vh-100">
    
    <AppHeader/>
    
      <main class="d-flex flex-column flex-grow-1">
        <RouterView />
      </main>
    
    <AppFooter/>
  </div>
</template>

<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'




  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="scss">

</style>