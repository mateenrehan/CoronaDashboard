<template lang="html">
  <div class="table-responsive col-md-10">
    <H5>* ALL Columns are Sortable</H5>
    <b-spinner label="Spinning" v-if='loading' style="margin: 300px 500px"></b-spinner>
    <ag-grid-vue v-if='!loading' style="width: 800px; height: 510px;"
      class="ag-theme-balham table-responsive"
      :columnDefs="columnDefs"
      :rowData="rowData">
    </ag-grid-vue>
  </div>
</template>

<script>
// Loading US cases Data province wise
import USCasesAPI from '../../services/usCases-api'
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridVue } from 'ag-grid-vue';

export default {
  data () {
    return {
      data: [],
      columnDefs: [],
      rowData: [],
      loading: Boolean
    }
  },
  components: {
      AgGridVue
  },
  mounted () {
    this.loadUSCasesData()
  },
  methods: {
      // For each province get the number of cases, deaths and recovered
    async loadUSCasesData () {
      this.loading = true;
      const response= await USCasesAPI.getUSCasesData()
      console.log("Response:" ,response.data)
      this.data = [{
        row: response.data[0]
      }]
      this.columnDefs = [
        {headerName: 'State Name', field: 'stateName', sortable:true},
        {headerName: 'County Name', field:'countyName', sortable:true},
        {headerName: 'Number of Cases',field: 'numberOfCases', sortable:true},
        {headerName: 'Number of Deaths', field: 'numberOfDeaths', sortable:true}
      ]
      response.data[0].forEach(row => {
        this.rowData.push({stateName: row.province, countyName: row.county, numberOfCases: row.latest.confirmed, numberOfDeaths: row.latest.deaths});
      });
      this.loading = false;
      console.log(this.rowData);
    }

  }
}
</script>

<style lang="css">
</style>