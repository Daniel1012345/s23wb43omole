const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
  username: String,
  password: String
});

accountSchema.methods.validPassword = function( pwd ) 
{
    console.log("authpass")
    console.log(this.username)
    console.log(this.password === pwd);
    console.log(passportLocalMongoose.password);
    console.log(pwd)
    return ( this.password === pwd );
};

accountSchema.plugin(passportLocalMongoose);

// We export the Schema to avoid attaching the model to the default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);

