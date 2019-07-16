const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect( 'mongodb://localhost:27017/UserDB', { useNewUrlParser: true } )



const UserSchema = new Schema({
    name: String,
    password: Date,
    apiKey: Number,
    movies: [],
})


const User = mongoose.model("User", UserSchema)

module.exports = User
