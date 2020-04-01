<template lang="html">
  <div>
    <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('usa')">USA</button>
    </div>
    <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('worldwide')">Worldwide</button>
    </div>
    <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('italy')">Italy</button>
    </div>
     <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('canada')">Canada</button>
    </div>
      <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('iran')">Iran</button>
    </div>
      <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('germany')">Germany</button>
    </div>
      <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('uk')">UK</button>
    </div>
      <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('china')">China</button>
    </div>
      <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('india')">India</button>
    </div>
    <graph-pie
            :width="500"
            :height="500"
            :padding-top="100"
            :padding-bottom="100"
            :padding-left="100"
            :padding-right="100"
            :values="values"
            :names="names"
            :active-index="[ 0, 2 ]"
            :active-event="'click'"
            :show-text-type="'outside'"
            :data-format="dataFormat">
        <legends :names="names"></legends>
        <tooltip :names="names"></tooltip>
    </graph-pie>
  </div>

</template>
<script>
import PieChartService from '../../services/pieChartService.js'

export default {
  data () {
    return {
      response: [],
      values: [],
      names: [],
      usa: Boolean,
      worldwide: Boolean,
      italy: Boolean,
      canada: Boolean,
    }
  },
  mounted () {
    this.change()
  },
  methods: {
    async loadData() {
      this.names = ['confirmed','deaths','recovered'];
      this.values = [this.response.data[0].cases, this.response.data[0].deaths, this.response.data[0].recovered];
    },

    dataFormat: function(a, b) {
      if(b) return b;
      return a;
    },

    async change(params) {
      if (params === "worldwide") {
        this.usa = false;
        this.worldwide = true;
        this.italy = false;
        this.canada = false;
        this.germany=false;
        this.china=false;
        this.india=false;
        this.uk=false;
        this.iran=false;
        this.response = await PieChartService.getWorldwideData();
        console.log(this.response);
      } else if (params === "italy") {
        this.italy = true;
        this.worldwide = false;
        this.usa = false;
        this.india=false;
        this.uk=false;
        this.germany=false;
        this.china=false;
        this.iran=false;
        this.canada=false;
        this.response = await PieChartService.getItalyData();
      } else if (params === "canada") {
        this.canada = true;
        this.worldwide = false;
        this.usa = false;
        this.germany=false;
        this.iran=false;
        this.china=false;
        this.india=false;
        this.uk=false;
        this.italy=false;
        this.response = await PieChartService.getCanadaData();
      }else if (params === "iran") {
        this.iran = true;
        this.worldwide = false;
        this.usa = false;
        this.canada = false;
        this.germany=false;
        this.china=false;
        this.india=false;
        this.uk=false;
        this.italy=false;
        this.response = await PieChartService.getIranData();
      }else if (params === "germany") {
        this.germany = true;
        this.worldwide = false;
        this.usa = false;
        this.canada = false;
        this.iran=false;
        this.china=false;
        this.india=false;
        this.uk=false;
        this.italy=false;
        this.response = await PieChartService.getGermanyData();
      }else if (params === "uk") {
        this.uk = true;
        this.worldwide = false;
        this.usa = false;
        this.canada = false;
        this.germany=false;
        this.iran=false;
        this.china=false;
        this.india=false;
        this.italy=false;
        this.response = await PieChartService.getUKData();
      }else if (params === "china") {
        this.china = true;
        this.worldwide = false;
        this.usa = false;
        this.canada = false;
        this.germany=false;
        this.iran=false;
        this.india=false;
        this.uk=false;
        this.italy=false;
        this.response = await PieChartService.getChinaData();
      }else if (params === "india") {
        this.india = true;
        this.worldwide = false;
        this.usa = false;
        this.canada = false;
        this.germany = false;
        this.china =false;
        this.iran=false;
        this.uk=false;
        this.italy=false;
        this.response = await PieChartService.getIndiaData();
      }
      else {
        this.usa = true;
        this.worldwide = false;
        this.italy = false;
        this.canada = false;
        this.germany=false;
        this.iran=false;
        this.china=false;
        this.india=false;
        this.uk=false;
        this.response = await PieChartService.getUSData();
      }
      this.loadData();
    }
  }
}
</script>

<style lang="css">
</style>