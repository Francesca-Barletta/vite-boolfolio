<template>
    <div class="container">

        <div class="mt-5 mb-5 text-center text-white p-2 rounded-4 bg-primary shadow-sm">
            <h1>{{ $route.params.slug }}</h1>
        </div>
        <div class="text-center">
            <button class="btn btn-primary" @click="$router.go(-1)">indietro</button>
        </div>
    </div>
</template>
        
        <script>
        export default {
              methods: {
        
              },
        }
        </script>
        
        <style lang="scss" scoped>
        
        </style>