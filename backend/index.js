const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const connectDB = require('./src/database/connection'); // import file connectDB
app.use(morgan('tiny')) // sử dụng giúp xem được **log** những resquest được gửi lên server.

//mongodb connection
connectDB();
app.use('/', require('./src/router/router')) // import load router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

