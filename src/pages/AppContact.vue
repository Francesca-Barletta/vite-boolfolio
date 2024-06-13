<template>
 <div class="container flex-grow-1">
    <h1>Welcome in contact page</h1>
    <form>
  <div class="mb-3">
    <label for="email" class="form-label h3">Email:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
    <label for="name" class="form-label h3">Nome:</label>
    <input class="form-control" type="text" placeholder="inserisci nome" aria-label="default input example">
  </div>
  <div class="mb-3">
  <label for="message" class="form-label h3">Messaggio:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Scrivi qui il tuo messaggio</textarea>
</div>
  <button type="submit" class="btn btn-primary">Invia</button>
  </form>
 </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>