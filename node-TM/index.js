const express = require('express')
const app=express()
const axios=require('axios');
const cors = require('cors')
app.use(cors())


const apiURL = 'https://api.themoviedb.org/', apiKey = '?api_key=88f0fe9d183ce85818df8fedefd60cf9', imageBaseurl = 'https://image.tmdb.org/t/p/';
const port = 3000;
var credits=[];

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


app.listen(port, () => {
  console.log(` Node backend running at  at http://localhost:${port}`)
})
