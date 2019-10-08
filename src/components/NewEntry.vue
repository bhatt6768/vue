<template>
  <div>
    <section >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-heading text-uppercase text-center">Write Entry</h2>
          </div>
          <div class="col-lg-12 text-center">
            <div id ="app" class="align-middle">
              <form  @submit.prevent="addEntry">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" name="title" id="title" class="form-control" v-model="entry.title"  required>
                  <small id="emailHelp"  class="form-text text-muted" ></small>
                </div>
                <div class="form-group">
                  <label for="body">Body</label>
                  <textarea name="body" id="body" cols="30" rows="10" class="form-control" v-model="entry.body" ></textarea>
                </div>
                <div class="form-group">

                  <button  type="submit" class="btn btn-primary btn-xl text-uppercase" >Publish</button>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import moment from 'moment';
  import * as router from "vue-router";
  export default {
    name: 'NewEntry',
    data(){
      return{
        entry:{}
      }
    },
    methods: {
      addEntry(){
        //Assigning form data to AllEntry(which is holding all the diary data)
        this.$parent.AllEntry.push({title: this.entry.title,body: this.entry.body, time: moment().format("MMM Do YY"), id: this.$parent.AllEntry.length });
        //empting model entry
        this.entry = {};
        //setting form data to localstorage
        localStorage.setItem(this.$localStorage, JSON.stringify(this.$parent.AllEntry));
        //set notification
        this.notify('Entry saved successfully');
        //redirect to allentries page
        this.$router.push('/allentry');
      },
      //
      notify(msg=''){
        this.$notification.show=true;
        this.$notification.notify=msg;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
