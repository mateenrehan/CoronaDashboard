<template lang="html">
  <div class="table-responsive">
      <table class="mt-1 table table-striped table-bordered">
        <thead>
          <tr>
                <th>Province Name</th>
                <!-- <th>Latitude</th>
                <th>Longitude</th> -->
                <th>Number of Cases</th>
                <th>Number of Deaths</th>
                <th>Number of Revovered</th>
          </tr>
        </thead>
        <tbody>
                <tr v-for="(value, key) in data[0].province" :key="key">
                  <td>{{value.province}}</td>
                  <!-- <td>{{value.coordinates.latitude}}</td>
                  <td>{{value.coordinates.longitude}}</td> -->
                  <td>{{value.latest.confirmed}}</td>
                  <td>{{value.latest.deaths}}</td>
                  <td>{{value.latest.recovered}}</td>
                </tr>
        </tbody>
              <!-- <li>{{data[0].province}}</li> -->
      </table>
  </div>

</template>

<script>
// Loading US cases Data province wise
import USCasesAPI from '../../services/usCases-api'
export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.loadUSCasesData()
  },
  methods: {
      // For each province get the number of cases, deaths and recovered
    async loadUSCasesData () {
      const response= await USCasesAPI.getUSCasesData()
      console.log("Response:" ,response.data)
      console.log("Country:",response.data[0][0].latest)
      this.data = [{
        province: response.data[0],
        // confirmed: response.data[0].latest,
        // deaths: response.data[0].latest.deaths,
        // recovered: response.data[0].latest.recovered
      }]
      console.log(this.data[0])
    }

  }
}
</script>

<style lang="css">
</style>