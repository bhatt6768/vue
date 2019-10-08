<template>
  <div class="all">
    <!-- All Entry Entry -->
    <section id="newentry">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <transition name="fade">
              <h2
                class="section-heading text-uppercase text-center alert-success"
                v-if="hideNotification"
              >{{this.$notification.notify }}</h2>
            </transition>
            <h2 class="section-heading text-uppercase text-center">All Entries</h2>
          </div>
          <div class="col-lg-12 text-center">
            <div id="app" class="align-middle">
              <div class="box_all_entry">
                <div class="container">
                  <div class="box_content">
                    <div class="row">
                      <div class="col-md-3">Date</div>
                      <div class="col-md-6">Title</div>
                      <div class="col-md-3">Actions</div>
                    </div>
                  </div>
                  <div
                    v-if="getAllEntries.length==0"
                    class="box_content text-center"
                  >no records found</div>
                  <div class="box_content" v-for="entry in getAllEntries">
                    <div class="row">
                      <div class="col-md-3">{{entry.time}}</div>
                      <div class="col-md-6">{{entry.title}}</div>
                      <div class="col-md-3">
                        <router-link
                          class="btn-dark"
                          :to="{name: 'ShowEntry', params: { id: entry.id }}"
                        >Show</router-link>
                        <router-link
                          class="btn-success"
                          :to="{name: 'EditEntry', params: { id: entry.id }}"
                        >Edit</router-link>
                        <a class="btn-danger cursorclass" @click="deleteEntry(entry)">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "AllEntry",
  data() {
    return {
      getAllEntries: this.$parent.AllEntry,
      hideNotification: this.$notification.show
    };
  },
  created() {
    if (this.hideNotification) {
      const self = this;
      this.$notification.show = false;
      window.setTimeout(function() {
        self.hideNotification = false;
      }, 2000);
    }
  },
  methods: {
    //deleting entry from localstorage
    deleteEntry(entry) {
      this.$parent.AllEntry.splice(this.$parent.AllEntry.indexOf(entry), 1);
      localStorage.setItem(
        this.$localStorage,
        JSON.stringify(this.$parent.AllEntry)
      );
    }
  }
};
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
.box_content {
  min-height: 105px;
  max-height: 105px;
}
.cursorclass {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.box_all_entry {
  padding: 40px 20px;
  background: #fed136;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}
.box_content {
  padding: 40px 20px;
  border-bottom: 1px solid black;
  text-align: justify;
}
.pagination {
  justify-content: center;
}
.page-link {
  color: white;
  background-color: #fed136;
  border: 1px solid black;
}
.page-link:hover {
  color: black;
  text-decoration: none;
  background-color: white;
  border-color: #fec503;
}
@media (min-width: 768px) {
  section {
    padding: 75px;
  }
}
</style>
