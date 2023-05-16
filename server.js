const express = require('express');
const bodyParser = require('body-parser');
const Redis = require('redis');
const app = express();

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
app.post('/users' ,(req,res) =>{
 const loginBody = req.body;
 const userName = loginBody.userName;
 const password = loginBody.password;
if (password==="candidate"){
    //This happends if the password is correct
    res.send("SUCCESS");
}else
    //This happends if the password is not correct
    res.status(200); //unauthorized
    res.send(["aws"]);

});

//post updating data 