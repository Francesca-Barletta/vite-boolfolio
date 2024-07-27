<template>
    <div class="container" v-if="project">

        <div class="mt-5 mb-5 text-center text-white p-2 rounded-4 bg-primary shadow-sm">
            <h1>{{ project.progetto }}</h1>
        </div>
        <div  class="mt-5 mb-5 text-center p-2 rounded-4 bg-white shadow-sm">    
            <p class="card-text text-center fw-bold text-secondary">{{ project.descrizione }}</p>
            <img v-if="project.image" :src="project.image_fullpath" alt="">
            <img v-else src="http://127.0.0.1:8000/storage/project_images/default-image.jpg" class="mb-4" alt="">
            <!-- <p>{{ console.log(project.image_fullpath) }}</p> -->
                <a :href="project.link" class="btn btn-primary mb-3">{{ project.link }}</a>
                <p class="card-text">Tipo: {{ project.type ? project.type.name : 'nessuno' }}</p>

                <ul class="d-flex gap-3 list-unstyled justify-content-center">
                    <li>Tecnologia:</li>
                    <li v-for="technology in project.technologies" :key="technology.id">
                        <p>{{ technology.name }}</p>
                    </li>
                </ul>

        </div>
        <div class="text-center">
            <button class="btn btn-primary mb-4" @click="$router.go(-1)">indietro</button>
        </div>
    </div>
</template>
        
        <script>
        import axios from 'axios';


     export default {

                props: {
                    slug: {
                        type: String,
                        required: true
                    }
                },
                data() {
                    return{
                        project: null
                    }
                },
        methods: {
            fetchProject() {
                axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then((res)=>{
                    // console.log(res.data.project)
                    this.project = res.data.project
                })
                .catch((err)=> {
                    console.log(err)
                    this.$router.replace({name: 'not-found', params: {
                        pathMatch: this.$route.path.substring(1).split('/')},
                })
                })
            }
        },
        created() {
            this.fetchProject()
        },
     
    }
        </script>
        
        <style lang="scss" scoped>
        
        </style>