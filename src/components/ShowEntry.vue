<template>
  <div>
    <section >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-heading text-uppercase text-center">{{showEntry.title}}</h2>
          </div>
          <div class="col-lg-12">
            <h4 class="section-heading text-uppercase text-center">{{showEntry.time}}</h4>
          </div>
          <div class="col-lg-12 text-center">
          <p class="text-muted">{{showEntry.body}}</p>
            <router-link class="btn btn-primary btn-xl text-uppercase" to='/allentry'>Back</router-link>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import moment from 'moment';
  import App from './App.vue'
  export default {

    name: 'ShowEntry',
    data(){
      return{
        //Assigning Allentry(which is storing the entries)
        showEntry:this.$parent.AllEntry[this.$route.params.id]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
