<template>
    <div class="col">

        <div class="card h-100 shadow-lg rounded-4">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body d-flex flex-column align-items-center justify-content-between">
                <h3 class="card-title text-center">{{ project.progetto }}</h3>
                <img v-if="project.image" :src="project.image_fullpath" alt="">
                <img v-else src="http://127.0.0.1:8000/storage/project_images/default-image.jpg" alt="">

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
.col{
    min-width: 350px;
}

.card-body{
    width: 100%;
    img{
       height: 300px;
       width: 100%;
       object-fit:cover; 
       object-position: center; 
    }
}
</style>