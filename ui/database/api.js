
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require("./db")

const port = 3000

app.use(cors())
app.use(express.json())

app.get("/test",async(req,res) => {
  try{
    console.log("Hello!")
  }catch(err){ 
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})
