const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//load router

app.use('/', require('./router/router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})