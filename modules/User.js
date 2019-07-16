const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect( 'mongodb://localhost:27017/UserDB', { useNewUrlParser: true } )



const UserSchema = new Schema({
    name: String,
    password: String,
    apiKey: String,
    movies: [],
    recommendedMovies: []
})


const User = mongoose.model("User", UserSchema)

module.exports = User
