var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public')); 

app.get('/index.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "index.html" );  
 });

 app.post('/process_post',urlEncodedParser,function (req, res) {  
    response = {  
           first_name:req.body.first_name,  
           last_name:req.body.last_name  
       };  
       console.log(response);  
       res.end(JSON.stringify(response));  
});

 app.get('/process_get', function (req, res) {  
 response = {  
        first_name:req.query.first_name,  
        last_name:req.query.last_name  
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 });

app.get('/',function(req,res){
    res.download('/demo.txt');
    res.send("Hello World");
});

var server = app.listen(8000,function(){
    console.log("Server listening now on " + server.address().port);
});