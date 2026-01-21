require(`dotenv`).config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
console.log(process.env);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/arav', (req, res) => {
  res.send('Hello World! arav')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 