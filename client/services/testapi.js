import API from '../services/api.js'
export default {
  getToDos () {
    return API().get('/todo')
  },

  getUSData() {
    return API().get('/us')
  }
  
}