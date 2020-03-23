import API from '../services/api.js'
export default {
  getUSCasesData() {
    return API().get('/us-cases')
  }
}