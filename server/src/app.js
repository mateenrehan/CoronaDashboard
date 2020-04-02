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
  axios.get('https://corona.lmao.ninja/countries/US')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})

app.get('/italy', (req, res) => {
  axios.get('https://corona.lmao.ninja/countries/IT')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.get('/canada', (req, res) => {
  axios.get('https://corona.lmao.ninja/countries/canada')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.get('/iran', (req, res) => {
  axios.get('https://corona.lmao.ninja/countries/iran')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.get('/germany', (req, res) => {
  axios.get('https://corona.lmao.ninja/countries/germany')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.get('/uk', (req, res) => {
  axios.get('https://corona.lmao.ninja/countries/uk')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.get('/china', (req, res) => {
  axios.get('https://corona.lmao.ninja/countries/china')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.get('/india', (req, res) => {
  axios.get('https://corona.lmao.ninja/countries/india')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})

app.get('/us-cases', (req, res) => {
  axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs')
  .then(response => {
    res.send([
      response.data.locations
    ])

  })
  .catch(error => {
    console.log("This is error",error);
  });
})

app.get('/worldwide', (req, res) => {
  axios.get('https://corona.lmao.ninja/all')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})


app.get('/us-timeline', (req, res) => {
  axios.get('https://corona.lmao.ninja/v2/historical/USA/')
  .then(response => {
    res.send([
      response.data.timeline
    ])

  })
  .catch(error => {
    console.log(error);
  });
})

app.get('/worldwide-timeline', (req, res) => {
  axios.get('https://corona.lmao.ninja/v2/historical/all/')
  .then(response => {
    res.send([
      response.data
    ])

  })
  .catch(error => {
    console.log(error);
  });
})

app.get('/italy-timeline', (req, res) => {
  axios.get('https://corona.lmao.ninja/v2/historical/Italy/')
  .then(response => {
    res.send([
      response.data.timeline
    ])

  })
  .catch(error => {
    console.log(error);
  });
})
app.listen(process.env.PORT || 8081) // client is already running on 8080