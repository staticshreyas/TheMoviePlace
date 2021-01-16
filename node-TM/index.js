const express = require('express')
const app=express()
const axios=require('axios');
const cors = require('cors')
app.use(cors())


const apiURL = 'https://api.themoviedb.org/', apiKey = '?api_key=88f0fe9d183ce85818df8fedefd60cf9', imageBaseurl = 'https://image.tmdb.org/t/p/';
const port = 3000;
var credits=[];

//Get Movie Lists
app.get('/getMovieList', (req, res) => {
    var category=req.query.mov;
    //console.log(movie)
    axios.get(apiURL + '3/movie/'+category+apiKey)
    .then((resp)=>{
        movieList=resp.data;
        res.send(movieList);
    })
    .catch((e)=>{
        console.log(e)
    })
    
})

//Get Movie
app.get('/getMovie', (req, res) => {
    var id=req.query.mov;
    //console.log(movie)
    axios.get(apiURL + '3/movie/' +id+ apiKey+ "&language=en-US")
    .then((resp)=>{
        movie=resp.data;
        res.send(movie);
    })
    .catch((e)=>{
        console.log(e)
    })
    
})

//Get Movie Credits
app.get('/getCredits', (req, res) => {
    var movie=req.query.mov;
    //console.log(movie)
    axios.get(apiURL + '3/movie/'+movie+"/credits"+apiKey)
    .then((resp)=>{
        credits=resp.data;
        res.send(credits);
    })
    .catch((e)=>{
        console.log(e)
    })
    
})

//Get Movie Certification
app.get('/getCertificate', (req, res) => {
    var id=req.query.mov;
    //console.log(movie)
    axios.get( apiURL + '3/movie/' +id+ "/release_dates" + apiKey)
    .then((resp)=>{
        certificate=resp.data;
        res.send(certificate);
    })
    .catch((e)=>{
        console.log(e)
    })
    
})

//Get Movie Trailer
app.get('/getTrailer', (req, res) => {
    var id=req.query.mov;
    //console.log(movie)
    axios.get( apiURL + '3/movie/' +id+ "/videos" + apiKey)
    .then((resp)=>{
        certificate=resp.data;
        res.send(certificate);
    })
    .catch((e)=>{
        console.log(e)
    })
    
})

app.listen(port, () => {
  console.log(` Node backend running at  at http://localhost:${port}`)
})
