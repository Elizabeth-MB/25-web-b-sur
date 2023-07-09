const express = require('express')
const app = express()

app.get('/', function (req, res) {
//   res.send('Hello World2')
  res.status(401).json({"message": "Server running"})
})

app.listen(8000)

console.log('Hello from node2');