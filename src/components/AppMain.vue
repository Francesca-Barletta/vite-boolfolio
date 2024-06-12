<template>
    <div>
<h1>I miei Progetti:</h1>
<div>
    <ul>
        <li v-for="project in projects">
            <h2>{{ project.progetto }}</h2>
            <p>{{ project.descrizione }}</p>
            <p>{{ project.link }}</p>
        </li>
    </ul>
</div>
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
                    // console.log(res.data.results)
                    this.projects = res.data.results
                })
            }
        },
        created() {
            this.fetchProjects()
        },
     
    }
</script>

<style lang="sass" scoped>

</style>