<template>
    <div class="container  flex-grow-1">
        <h1>I miei Progetti:</h1>
        <div class="row row-cols-2 row-gap-3">
            <ProjectCard v-for="project in projects" :project="project" />
        </div>
    </div>
    <div class="container" v-if="lastPage > 1">
        <ul class="d-flex list-unstyled justify-content-center gap-3 my-3">
            <li :class="n === currentPage ? 'btn btn-primary' : 'btn btn-secondary'" @click="changePage(n)" v-for="n in lastPage" :key="n">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
    export default {
        components: {
            ProjectCard
        },
        data() {
           return{
            projects:[],
            currentPage: 1,
            lastPage: null
           }
        },
        methods: {
            changePage(n){
                if(n === this.currentPage) return
                this.currentPage = n
                this.fetchProjects()
            },
            fetchProjects() {
                axios.get('http://127.0.0.1:8000/api/projects', {
                    params: {
                        page: this.currentPage,
                    }
                })
                .then((res)=>{
                    console.log(res.data.results)
                    this.projects = res.data.results.data
                    this.lastPage = res.data.results.last_page
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