<template>
 
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">FB</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/portfolio">Portfolio</RouterLink>

          </li>
          <li class="nav-item">
            <RouterLink to="/contact">Contatti</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>