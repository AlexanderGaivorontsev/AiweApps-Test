const express = require('express')
const app = express()
const path = require('path')

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const indexRoute = require('./routes/index-router.js')
app.use('/', indexRoute)



app.listen(3000, function () {
    console.log('Jobs done on 3000 port')
})