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
      <graph-line-dateblock
            :width="600"
            :height="400"
            :axis-min="0"
            :axis-max="100"
            :axis-reverse="false"
            :axis-format="'HH:mm'"
            :axis-interval="1000 * 60 * 60 * 8"
            :values="values">
        <note :text="'Line Chart'"></note>
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
      this.values = [];
      // this.response.data[0].timeline.cases.forEach(row => {
      //   console.log(row);
      // })
      const cases = this.response.data[0].timeline.cases;
      const deaths = this.response.data[0].timeline.deaths;
      const recovered = this.response.data[0].timeline.recovered;

      console.log(cases);
      console.log(deaths);
      console.log(recovered);

      console.log(this.response.data[0].timeline);

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
        this.response = await TimeLineGraphService.getWorldwideData();
        console.log(this.response);
      } else if (params === "italy") {
        this.italy = true;
        this.worldwide = false;
        this.usa = false;
        this.response = await TimeLineGraphService.getItalyData();
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