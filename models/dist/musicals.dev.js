"use strict";

var mongoose = require("mongoose");

var musicalSchema = mongoose.Schema({
  instrument_type: String,
  brand: String,
  cost: Number
});
module.exports = mongoose.model("Musicals", musicalSchema);
//# sourceMappingURL=musicals.dev.js.map
