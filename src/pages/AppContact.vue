<template>
    <div class="container flex-grow-1">
        <div class="mt-5 w-100  text-primary p-2 rounded-4 bg-light shadow-lg">
            <h1 class="text-center">Pagina dei contatti</h1>

            <form>
                <div class="mb-3 p-2 text-primary">
                    <label for="email" class="form-label h4">Email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

                </div>
                <div class="mb-3 p-2 text-primary">
                    <label for="name" class="form-label h4">Nome:</label>
                    <input class="form-control" type="text" placeholder="inserisci nome"
                        aria-label="default input example">
                </div>
                <div class="mb-3 p-2 text-primary">
                    <label for="message" class="form-label h4">Messaggio:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"
                        rows="3">Scrivi qui il tuo messaggio</textarea>
                </div>

            <button type="submit" class="btn btn-primary p-2 ms-2 mb-3">Invia</button>
        </form>
    </div>
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>