<template>
 
<div class="container-fluid bg-primary">
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <h3 class="text-white">FB</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mx-3">
            <RouterLink class="text-white text-decoration-none" to="/">Home</RouterLink>
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="text-white text-decoration-none" to="/portfolio">Portfolio</RouterLink>

          </li>
          <li class="nav-item mx-3">
            <RouterLink class="text-white text-decoration-none" to="/contact">Contatti</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>