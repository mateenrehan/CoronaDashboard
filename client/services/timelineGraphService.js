import Service from './service.js'
export default {

  getUSData() {
    return Service().get('/us-timeline')
  },
  getWorldwideData() {
    return Service().get('/worldwide-timeline')
  },
  getItalyData() {
    return Service().get('/italy-timeline')
  },
  getCanadaData() {
    return Service().get('/canada-timeline')
  },
  getIranData() {
    return Service().get('/iran-timeline')
  },
  getGermanyData() {
    return Service().get('/germany-timeline')
  },
  getUKData() {
    return Service().get('/uk-timeline')
  },
  getChinaData() {
    return Service().get('/china-timeline')
  },
  getIndiaData() {
    return Service().get('/india-timeline')
  }
  
}