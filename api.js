const express = require( 'express' )
const app=express()
const mongoose = require( 'mongoose' )
const router = express.Router()
const request=require('request')
const User= require('./modules/User')

const key='f879f4132d8f332d5be23dee1d085d9f'
const namekey='b6c343c7'

router.get('/movies',function(req,res){
    request(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,function(err,r,body){
        const data=JSON.parse(body)
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

router.get('/user/:moviename',function(req,res){
    let name=req.params.moviename
    request(`http://www.omdbapi.com/?apikey=${namekey}&t=${name}`,function(err,r,Body){
        const imdb=JSON.parse(Body)
res.send(imdb)
    })
})


router.get('/user/:imdbid',function(req,res){
   let imdbid=req.params.imdbid
      
        request(`https://api.themoviedb.org/3/find/${imdbid}?api_key=${key}&language=en-US&external_source=imdb_id`,function(err,r,body){
            const data=JSON.parse(body)
            const id=data.movie_results[0].id
           // res.sendStatus(data.movie_results[0].id)
            request(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`,function(err,r,body){
                const movies=JSON.parse(body)
               res.send(movies)
            })
        })
    })

router.post('/user',function(req,res){
    const data=req.body
    new User(data).save()
    res.end('saved')
})

router.put('/user',function(req,res){
    const moviedata=req.body
    
})


module.exports = router