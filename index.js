require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT

require('./models/index')

app.use(express.json())

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})