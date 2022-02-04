var mongoose = require('mongoose');

var itemsSchema = mongoose.Schema({
    name:String,
    price:Number
})

module.exports = mongoose.model("items",itemsSchema)