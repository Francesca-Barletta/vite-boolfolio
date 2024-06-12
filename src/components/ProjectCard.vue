<template>
        <div class="card">
    
                <ul>
                    <li>
                        <h2>{{ project.progetto }}</h2>
                    </li>

                    <li>
                         <p>Descrizione: {{ project.descrizione }}</p>
                    </li>
                    
                    <li>
                        <p>Link:{{ project.link }}</p>
                    </li>
                    <li>
                       <p>Tipo:{{ project.type }}</p>
                    </li>
                    <li v-for="technology in project.technologies" :key="technology.id">
                       <p>Tecnologia:{{ technology.name }}</p>
                    </li>
                </ul>

            </div>
      

   

</template>

<script>
    export default {
        props: {
            project: Object
        }
    }
</script>

<style lang="sass" scoped>
.card{
    width:200px;
    border:1px solid black;
    padding:10px
}

</style>