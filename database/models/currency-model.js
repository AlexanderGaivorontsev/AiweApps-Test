const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    console.log('Database connection successful!')
  })

const currencyScheme = new mongoose.Schema({
    id: String,
    value: Number
})

exports.currencyModel = mongoose.model('currency' ,currencyScheme)