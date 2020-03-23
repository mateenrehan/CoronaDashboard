<template lang="html">
  <div style="width=500px height=50px">
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
import TestAPI from '../../services/testapi.js'
export default {
  data () {
    return {
      data: [],
      values: [],
      names: []
    }
  },
  mounted () {
    this.loadUSData()
  },
  methods: {
    async loadUSData () {
      const response = await TestAPI.getUSData()
      console.log(response)
      var confirmed = response.data[0].confirmed
      var deaths = response.data[0].deaths
      var recovered = response.data[0].recovered 
      this.data = [{
        confirmed: response.data[0].confirmed,
        deaths: response.data[0].deaths,
        recovered: response.data[0].recovered
      }]
      this.names = ['confirmed','deaths','recovered'];
      this.values = [confirmed, deaths, recovered];
      console.log(this.data[0])
    },

    dataFormat: function(a, b) {
            if(b) return b;
            return a;
        }
  }
}
</script>

<style lang="css">
</style>