<template>
<AppHeader/>

  <main>
    <RouterView />
  </main>

<AppFooter/>
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