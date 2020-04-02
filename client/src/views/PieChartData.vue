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
            :colors="[ '#9c5a03', '#c70000', '#0b9c03' ]"
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
      iran: Boolean,
      germany: Boolean,
      uk: Boolean,
      china: Boolean,
      india: Boolean
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
        this.usa=false;
        this.worldwide=true;
        this.italy=false;
        this.canada=false;
        this.iran=false;
        this.germany=false;
        this.uk=false;
        this.china=false;
        this.india=false;
        this.response = await PieChartService.getWorldwideData();
        console.log(this.response);
      } else if (params === "italy") {
        this.usa=false;
        this.worldwide=false;
        this.italy=true;
        this.canada=false;
        this.iran=false;
        this.germany=false;
        this.uk=false;
        this.china=false;
        this.india=false;
        this.response = await PieChartService.getItalyData();
      } else if (params === "canada") {
        this.usa=false;
        this.worldwide=false;
        this.italy=false;
        this.canada=true;
        this.iran=false;
        this.germany=false;
        this.uk=false;
        this.china=false;
        this.india=false;
        this.response = await PieChartService.getCanadaData();
      }else if (params === "iran") {
        this.usa=false;
        this.worldwide=false;
        this.italy=false;
        this.canada=false;
        this.iran=true;
        this.germany=false;
        this.uk=false;
        this.china=false;
        this.india=false;
        this.response = await PieChartService.getIranData();
      }else if (params === "germany") {
        this.usa=false;
        this.worldwide=false;
        this.italy=false;
        this.canada=false;
        this.iran=false;
        this.germany=true;
        this.uk=false;
        this.china=false;
        this.india=false;
        this.response = await PieChartService.getGermanyData();
      }else if (params === "uk") {
       this.usa=false;
        this.worldwide=false;
        this.italy=false;
        this.canada=false;
        this.iran=false;
        this.germany=false;
        this.uk=true;
        this.china=false;
        this.india=false;
        this.response = await PieChartService.getUKData();
      }else if (params === "china") {
      this.usa=false;
        this.worldwide=false;
        this.italy=false;
        this.canada=false;
        this.iran=false;
        this.germany=false;
        this.uk=false;
        this.china=true;
        this.india=false;
        this.response = await PieChartService.getChinaData();
      }else if (params === "india") {
        this.usa=false;
        this.worldwide=false;
        this.italy=false;
        this.canada=false;
        this.iran=false;
        this.germany=false;
        this.uk=false;
        this.china=false;
        this.india=true;
        this.response = await PieChartService.getIndiaData();
      } else {
        this.usa=true;
        this.worldwide=false;
        this.italy=false;
        this.canada=false;
        this.iran=false;
        this.germany=false;
        this.uk=false;
        this.china=false;
        this.india=false;
        this.response = await PieChartService.getUSData();
      }
      this.loadData();
    }
  }
}
</script>

<style lang="css">
</style>