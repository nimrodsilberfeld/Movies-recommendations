const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = express.Router()
const request = require('request')
const User = require('./modules/User')

const key = 'f879f4132d8f332d5be23dee1d085d9f'
const namekey = 'b6c343c7'

router.get('/movies', function (req, res) {
    request(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`, function (err, r, body) {
        const data = JSON.parse(body)
        res.send(data)
    })
})

//router.get('/user/:username',function(req,res){
//let user=req.params.username
//  User.find({},function(err,data){
//  if(data.username===user){
//      res.json(data)
//  }else{
//     res.send(err)
// }
// })
//})

router.get('/movies/:moviename', function (req, res) {
    let name = req.params.moviename
    request(`http://www.omdbapi.com/?apikey=${namekey}&t=${name}`, function (err, r, Body) {
        const imdb = JSON.parse(Body)
        res.send(imdb)
    })
})


router.get('/movies/:imdbid', function (req, res) {
    let imdbid = req.params.imdbid

    request(`https://api.themoviedb.org/3/find/${imdbid}?api_key=${key}&language=en-US&external_source=imdb_id`, function (err, r, body) {
        const data = JSON.parse(body)
        const id = data.movie_results[0].id
        // res.sendStatus(data.movie_results[0].id)
        request(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`, function (err, r, body) {
            const movies = JSON.parse(body)
            res.send(movies)
        })
    })
})

router.post('/user/:username', function (req, res) {
    const data = req.body
    let user = req.params.username
    User.findOne({ name: user }, function (err, d) {
        if (d==null) {
            new User(data).save()
            res.end('saved')
        }else{
        res.end('not saved')
            
        }

    })

})

router.put('/user/:username', function (req, res) {
    const user = req.params.username
    const moviedata = req.body
    User.findOneAndUpdate({ name: user }, { $set: { movies: moviedata } }, function (err, x) {
        res.send(x)
    })
})


module.exports = router