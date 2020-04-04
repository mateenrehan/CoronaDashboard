<template>
  <div class="wrapper">
    <nav class="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow" style="background-color: #116466;">      
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" v-on:click="showOptions()">
      <font-awesome-icon icon="bars" /></a>
      <H3 class="navbar-brand mx-auto text-center">Corona Dashboard</H3>
    </nav>
    <side-bar class="col-md-2">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <nav class= "mt-4" style="background-color: #0cdaa6" v-if="!show">
          <div>
            <ul class="nav flex-column">
                <!-- <li class="nav-item">
                <a class="nav-link active" href="/#/" tabindex="1">
                  <font-awesome-icon icon="home" />
                    Home
                </a>
                </li> -->
                <li class="nav-item">
                <a class="nav-link active" href="/#/" tabindex="1">
                  <font-awesome-icon icon="chart-pie" />
                    Pie Chart
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/#/us-cases" tabindex="1">
                  <font-awesome-icon icon="table" />
                    USA Statewise Data
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/#/timeline" tabindex="1">
                    <font-awesome-icon icon="chart-line" />
                    Timeline Graph
                </a>
                </li>
                <!-- <li class="nav-item">
                <a class="nav-link" href="#" tabindex="1">
                    <span data-feather="layers" ></span>
                    Donut Chart
                </a>
                </li> -->
            </ul>
          </div>
        </nav>
    </side-bar>
    
    <div class="main-panel">
      <router-view class="mt-5"></router-view>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
a {   
    color: white; 
    font-size: 0.90em;
    font-weight: bold;  
}

a:active {
    color: black;
}

a[tabindex]:focus {
    color: black;
    outline: none;
}
</style>
<script>
  import ContentFooter from './ContentFooter.vue'
  export default {
    components: {
      ContentFooter
    },
    data () {
      return {
        show: Boolean
      }
    },
    methods: {
      showOptions() {
        this.show = !this.show;
      }
    }
  }

</script>
