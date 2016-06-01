const Chance = require('chance');
const express = require('express');
var starwars = require('starwars');


const chance = new Chance;
const app = new express;



app.get('/', function(req, res){
  const number = chance.integer({min: 0, max: 2})

  res.send(starwars());
});

app.listen(8080, function(){
  console.log('Accepting HTTP requests on port 8080');
});
