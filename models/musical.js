const mongoose = require("mongoose")
const musicalSchema = mongoose.Schema({
    instrument_type: String,
    brand: String,
    cost: Number
})

module.exports = mongoose.model("musical", musicalSchema)