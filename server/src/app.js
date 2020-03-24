// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')
const app = express() // create your express app
// make app use dependencies
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/todo', (req, res) => {
    res.send([
      'Thing 1',
      'Thing 2'
    ])
  })

app.get('/us', (req, res) => {
  axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=US')
  .then(response => {
    res.send([
      response.data.latest
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.get('/us-cases', (req, res) => {
  axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=US')
  .then(response => {
    res.send([
      response.data.locations
    ])

  })
  .catch(error => {
    console.log("This is error",error);
  });
})



app.listen(process.env.PORT || 8081) // client is already running on 8080