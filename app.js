var express = require('express')
var app = express()

let port = 3000

app.get('/', function(req, res) {
    res.send("your're home")
})

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})
