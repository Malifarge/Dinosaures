require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT
const dynosaursRoutes = require('./Routes/dynosaurs')

require('./models/index')

app.use(express.json())
app.use('/dynosaurs', dynosaursRoutes)

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})