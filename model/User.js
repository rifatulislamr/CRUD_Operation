const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    email : { 
        type : String, 
        unique: true
    },
    password: {
        type: String
    },
    token: {type: String},
})

module.exports = mongoose.model("User", userSchema);