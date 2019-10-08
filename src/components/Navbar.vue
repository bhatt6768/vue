<template>
 <nav class="navbar navbar-expand-sm bg-dark">
<div class="container">
        <router-link class="navbar-brand js-scroll-trigger" to="/">Crud App</router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/">New Record</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/allentry">All Record</router-link>
            </li>
          </ul>
        </div>
      </div>
</nav>
</template>
<script>
export default {
  name: 'Navbar',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
