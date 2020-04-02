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
      <graph-line-dateblock
            :width="1100"
            :height="500"
            :axis-min="0"
            :axis-max="auto"
            :axis-reverse="false"
            :axis-format="'dd-MMM'"
            :axis-interval="1000 * 60 * 60 * 24 * 5"
            :labels="labels"
            :values="values"
            :colors="[ '#9c5a03', '#c70000', '#0b9c03' ]">
        <legends :names="names"></legends>
        <tooltip :names="names" :position="'right'"></tooltip>
        <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
    </graph-line-dateblock>
  </div>

</template>
<script>
import TimeLineGraphService from '../../services/timelineGraphService.js'

export default {
  data () {
    return {
      response: [],
      values: [],
      labels:[],
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
      this.names = ['confirmed', 'deaths', 'recovered'];
      this.values = [];
      this.labels = [];
      const confirmedValue = [];
      const deathsValue = [];
      const recoveredValue = [];

      const cases = this.response.data[0].cases;
      const deaths = this.response.data[0].deaths;
      const recovered = this.response.data[0].recovered;

      console.log(typeof(cases));
      console.log(typeof(deaths));
      console.log(typeof(recovered));
      
      for (let [key, value] of Object.entries(cases)) {
        this.labels.push(new Date(key));
        confirmedValue.push(value);
      }

      for (let [key, value] of Object.entries(deaths)) {
        console.log(key);
        deathsValue.push(value);
      }

      for (let [key, value] of Object.entries(recovered)) {
        console.log(key);
        recoveredValue.push(value);
      }

      this.values = [confirmedValue, deathsValue, recoveredValue];
      console.log(this.values)
      console.log(this.labels)
    },

    async change(params) {
      if (params === "worldwide") {
        this.usa = false;
        this.worldwide = true;
        this.italy = false;
        this.response = await TimeLineGraphService.getWorldwideData();
        console.log(this.response);
      } else if (params === "italy") {
        this.italy = true;
        this.worldwide = false;
        this.usa = false;
        this.response = await TimeLineGraphService.getItalyData();
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
        this.response = await TimeLineGraphService.getCanadaData();
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
        this.response = await TimeLineGraphService.getIranData();
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
        this.response = await TimeLineGraphService.getGermanyData();
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
        this.response = await TimeLineGraphService.getUKData();
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
        this.response = await TimeLineGraphService.getChinaData();
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
        this.response = await TimeLineGraphService.getIndiaData();
      } else {
        this.usa = true;
        this.worldwide = false;
        this.italy = false;
        this.response = await TimeLineGraphService.getUSData();
      }
      this.loadData();
    }
  }
}
</script>

<style lang="css">
</style>