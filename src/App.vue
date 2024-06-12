<template>
<AppHeader/>
<AppMain/>

<AppFooter/>
</template>

<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'



  export default {
    components: {
      AppHeader,
      AppMain,
      AppFooter
    }
  }
</script>

<style lang="sass">

</style>