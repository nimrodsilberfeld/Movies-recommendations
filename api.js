const express = require( 'express' )
const app=express()
const mongoose = require( 'mongoose' )
const router = express.Router()
const request=require('request')

const key='f879f4132d8f332d5be23dee1d085d9f'
const namekey='b6c343c7'

router.get('/',function(req,res){
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
      
        request(`https://api.themoviedb.org/3/find/${imdb.imdbID}?api_key=${key}&language=en-US&external_source=imdb_id`,function(err,r,body){
            const data=JSON.parse(body)
            res.send(data.movie_results)
        })
    })
})




module.exports = router