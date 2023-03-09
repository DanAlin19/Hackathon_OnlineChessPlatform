const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./api.routes')
const  mongoose = require('mongoose')
const morgan = require('morgan')
const errorHandler = require("./common/errors/errors.utils").errorHandler

dotenv.config()
const app = express();
const mongoPath = process.env.MONGO_URL || "mongodb://0.0.0.0:27017/HackIT_All";

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('tiny'));

app.use('/api/v1', router);
app.use(errorHandler);

mongoose.connect(mongoPath)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

module.exports = app;