require('dotenv').config()
const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
const port = 1000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("it's my working server");
})

app.get('/login', (req, res) => {
    res.send('<h1>please login in your backend</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})