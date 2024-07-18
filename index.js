const express = require('express')

const app = express()
const port = 8999

app.get('/', (req, resp) => {
  resp.send('hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening as http://localhost:${port}`)
})
