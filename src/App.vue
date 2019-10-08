<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
 </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  name: 'app',
  components:{Navbar},
  data () {
    return {
      AllEntry:[],
    }
  },
  created(){
    //// Allentry(which is storing the entries)
    //this.$localStorage is a variable holding this value 'Diary'
   this.AllEntry = JSON.parse(localStorage.getItem(this.$localStorage) || '[]');
  },
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
