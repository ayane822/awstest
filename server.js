const express = require('express');
const bodyParser = require('body-parser');
const Redis = require('redis');
const res = require('express/lib/response');
const app = express();
const data = require("./data.json")

const port = 5500;
const redisClient = Redis.createClient();

app.use(bodyParser.json()); //allow json reuests 

app.listen(port, () => {
    redisClient.connect();
    console.log("listening on port : " + port);
});

app.get('/' , (req, res) => {
    res.send("AWS");
    //when I just want to get AWS (step1)
});

//step2 get "succdess" after i successfully logedin 
app.get('/secret', (req,res) => {
    res.send("SUCCESS");
});
//post is when i have users to type thier information
app.get('/datastore' ,(req,res) =>{
 const loginBody = req.body;
 console.log (data)
 const name = req.query.name
 const price = data[name].price
 const amount = data[name].amount
 //const password = loginBody.password;
    res.send({price , amount})


});

//post updating data 