<template>
    <div class="col">

        <div class="card h-100 align-items-center shadow-lg rounded-4">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h3 class="card-title text-center">{{ project.progetto }}</h3>

                <p class="card-text text-center">{{ project.descrizione }}</p>
                <a :href="project.link" class="btn btn-primary mb-3">{{ project.link }}</a>
                <p class="card-text">Tipo: {{ project.type ? project.type.name : 'nessuno' }}</p>
               

                
            
                <ul class="d-flex gap-3 list-unstyled">
                    <li>Tecnologia:</li>
                    <template v-if="project.technologies.length > 0">
                        <li v-for="technology in project.technologies" :key="technology.id">
                            <p>{{ technology.name}}</p>
                        </li>
                    </template>
                    <li v-else>nessuna</li>
                 

                </ul>
                <RouterLink class="text-decoration-none btn btn-primary mb-3" :to="{ name: 'projects.show', params: {slug: project.slug}}">Mostra</RouterLink>
            </div>
        </div>
    </div>





</template>

<script>
    export default {
        props: {
            project: Object
        }
    }
</script>

<style lang="scss" scoped>


</style>