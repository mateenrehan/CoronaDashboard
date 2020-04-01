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
  }
}