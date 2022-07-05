const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const connectDB = require('./src/database/connection'); // import file connectDB
app.use(morgan('tiny')) // sử dụng giúp xem được **log** những resquest được gửi lên server.

//mongodb connection
connectDB();

//parse request to body-parser
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));


app.use('/', require('./src/router/router')) // import load router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

