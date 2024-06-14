<template>
    <div class="container">

        <div class="mt-5 mb-5 text-center text-white p-2 rounded-4 bg-primary shadow-sm">
            <h1>{{ project.progetto}}</h1>
        </div>
        <div  class="mt-5 mb-5 text-center p-2 rounded-4 bg-white shadow-sm">    
            <p class="card-text text-center">{{ project.descrizione }}</p>
                <a :href="project.link" class="btn btn-primary mb-3">{{ project.link }}</a>
                <p class="card-text" v-if="project.type">Tipo: {{ project.type.name }}</p>

                <ul class="d-flex gap-3 list-unstyled justify-content-center">
                    <li>Tecnologia:</li>
                    <li v-for="technology in project.technologies" :key="technology.id">
                        <p>{{ technology.name }}</p>
                    </li>
                </ul>

        </div>
        <div class="text-center">
            <button class="btn btn-primary" @click="$router.go(-1)">indietro</button>
        </div>
    </div>
</template>
        
        <script>
        import axios from 'axios';
import { sassNull } from 'sass';

     export default {

                props: {
                    slug: {
                        type: String,
                        required: true
                    }
                },
                data() {
                    return{
                        project: sassNull
                    }
                },
        methods: {
            fetchProject() {
                axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then((res)=>{
                    console.log(res.data.project)
                    this.project = res.data.project
                })
                .catch((err)=> {
                    console.log(err)
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