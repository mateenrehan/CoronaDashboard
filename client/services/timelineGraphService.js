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
  }
  
}