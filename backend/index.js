// package require 
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const { app } = require('./src/app.js')

// env configuration 
dotenv.config();

// mongodb connection 
mongoose.connect(process.env.MONGODB_URL,
    { dbName: "EntertainmentWebApp" }
).then(() => { console.log("Mongodb is connected") }
).catch((error) => { console.error(error) })

// server listening
app.listen(process.env.PORT, () => {
    console.log("Server running on url: http://localhost:" + process.env.PORT);
})
