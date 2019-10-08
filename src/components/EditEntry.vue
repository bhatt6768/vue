<template>
  <div>
    <section >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div id="app" class="align-middle">
              <form @submit.prevent="editEntry()">
                <div class="form-group text-center">
                  <label for="title">Title</label>
                  <input type="text" name="title" id="title" class="form-control" v-model="entry.title" required>
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group text-center">
                  <label for="body">Body</label>
                  <textarea name="body" id="body" cols="30" rows="10" class="form-control" v-model="entry.body"></textarea>
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group text-center">
                  <button type="submit" class="btn btn-primary btn-xl text-uppercase">Save</button>
                  <router-link class="btn btn-primary btn-xl text-uppercase" to='/allentry'>Cancel</router-link>

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
  import App from './App.vue'
  export default {
    name: 'EditEntry',
    data(){
      return{
        entry:{}
      }
    },
    created(){
      //grabbing the id of entry and sending the id as parameter to a method function
      this.grabSingleEntryData(this.$route.params.id);
    },
    methods:{
      //setting the value for entry object
      grabSingleEntryData:function(id){
        const singleEntry=this.$parent.AllEntry[id];
        this.entry=singleEntry;
      },
      //setting data to localstorage
      editEntry(){
        this.$parent.AllEntry[this.entry.id]={title: this.entry.title,body: this.entry.body, time: moment().format("MMM Do YY"), id: this.entry.id };
        localStorage.setItem(this.$localStorage, JSON.stringify(this.$parent.AllEntry));
        this.notify('Entry edited successfully');
        this.$router.push('/allentry');

      },
      //set notification
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
