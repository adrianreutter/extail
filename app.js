const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.static('static'))

app.get('*', (req, res) => {
  
  fs.readFile(path.join('routes' + req.url + '/index.html'), 'utf8', function(err, contents) {
    if (err) {
      res.statusCode = 404
      res.send('route not found')
    } else {
      res.statusCode = 200
      res.send(contents)
    }
  })
})

app.listen(3000, () => {
  console.log('server started on 3000')
})

