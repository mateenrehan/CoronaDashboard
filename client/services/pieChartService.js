import Service from './service.js'
export default {

  getUSData() {
    return Service().get('/us')
  },
  getWorldwideData() {
    return Service().get('/worldwide')
  },
  getItalyData() {
    return Service().get('/italy')
  },
  getCanadaData() {
    return Service().get('/canada')
  },
  getIranData() {
    return Service().get('/iran')
  },
  getGermanyData() {
    return Service().get('/germany')
  },
  getUKData() {
    return Service().get('/uk')
  },
  getChinaData() {
    return Service().get('/china')
  },
  getIndiaData() {
    return Service().get('/india')
  }
}