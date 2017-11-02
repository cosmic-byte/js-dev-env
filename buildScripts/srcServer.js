var app = require('express')();
var path = require('path');
var open = require('open');

var port = 3000;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+port);
    }
})