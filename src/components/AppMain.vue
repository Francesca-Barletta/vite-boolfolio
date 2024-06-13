<template>
    <div class="container">
        <h1>I miei Progetti:</h1>
        <div class="row row-gap-3">
            <ProjectCard v-for="project in projects" :project="project" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'
    export default {
        components: {
            ProjectCard
        },
        data() {
           return{
            projects:[]
           }
        },
        methods: {
            fetchProjects() {
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((res)=>{
                    console.log(res.data.results)
                    this.projects = res.data.results
                })
            }
        },
        created() {
            this.fetchProjects()
        },
     
    }
</script>

<style lang="scss" scoped>

</style>