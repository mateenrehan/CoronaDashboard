import Service from './service.js'
export default {
  getUSCasesData() {
    return Service().get('/us-cases')
  }
}