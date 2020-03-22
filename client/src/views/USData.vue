<template lang="html">
  <div>
    <ul>
      <li>{{data[0].confirmed}}</li>
      <li>{{data[0].deaths}}</li>
      <li>{{data[0].recovered}}</li>
    </ul>
  </div>
</template>
<script>
import TestAPI from '../../services/testapi.js'
export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.loadUSData()
  },
  methods: {
    async loadUSData () {
      const response = await TestAPI.getUSData()
      console.log(response)
      this.data = [{
        confirmed: response.data[0].confirmed,
        deaths: response.data[0].deaths,
        recovered: response.data[0].recovered
      }]
      console.log(this.data[0])
    }
  }
}
</script>

<style lang="css">
</style>