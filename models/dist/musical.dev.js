"use strict";

var mongoose = require("mongoose");

var musicalSchema = mongoose.Schema({
  instrument_type: String,
  brand: String,
  cost: Number
});
module.exports = mongoose.model("musical", musicalSchema);
//# sourceMappingURL=musical.dev.js.map
