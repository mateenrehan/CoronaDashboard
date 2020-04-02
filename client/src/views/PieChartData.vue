<template lang="html">
  <div>
    <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('usa')">USA</button>
    </div>
    <div class="btn-group mr-4" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('worldwide')">Worldwide</button>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" class="btn btn-dark" v-on:click="change('italy')">Italy</button>
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
      italy: Boolean
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
        this.response = await PieChartService.getWorldwideData();
        console.log(this.response);
      } else if (params === "italy") {
        this.italy = true;
        this.worldwide = false;
        this.usa = false;
        this.response = await PieChartService.getItalyData();
      } else {
        this.usa = true;
        this.worldwide = false;
        this.italy = false;
        this.response = await PieChartService.getUSData();
      }
      this.loadData();
    }
  }
}
</script>

<style lang="css">
</style>