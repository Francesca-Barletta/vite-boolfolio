<template>
    <div class="container flex-grow-1">
        <div class="mt-5 mb-5 text-center text-white p-2 rounded-4 bg-primary shadow-sm">
            <h1>404</h1>
        </div>
        <div class="bg-white p-4 rounded-4 text-center text-primary shadow-lg mb-3">
            <h2>pagina non trovata</h2>
        </div>
        <div class="text-center">
            <button class="btn btn-primary" @click="$router.go(-1)">indietro</button>
        </div>
    

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>