<template>
    <div>
<h1>I miei Progetti:</h1>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
 
        data() {
           return{
            projects:[]
           }
        },
        methods: {
            fetchProjects() {
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((res)=>{
                    this.projects = res.data.results.data
                })
            }
        },
        created(){
            this.fetchProjects()
        }
     
    }
</script>

<style lang="sass" scoped>

</style>