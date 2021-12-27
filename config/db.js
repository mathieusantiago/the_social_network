const mongoose = require('mongoose');
require('dotenv').config({path: './config/.env'});

mongoose.connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.x3gp7.mongodb.net/faceCode",

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log("failed to connect to MongoDB", err))