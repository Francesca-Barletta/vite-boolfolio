<template>
    <div class="col-4">

        <div class="card h-100">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{ project.progetto }}</h5>

                <p class="card-text">Descrizione: {{ project.descrizione }}</p>
                <a :href="project.link" class="btn btn-primary">{{ project.link }}</a>
                <p class="card-text" v-if="project.type">Tipo: {{ project.type.name }}</p>
            
            
                <ul class="d-flex gap-3 list-unstyled">
                    <li>Tecnologia:</li>
                    <li v-for="technology in project.technologies" :key="technology.id">
                        <p>{{ technology.name }}</p>
                    </li>
                </ul>
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