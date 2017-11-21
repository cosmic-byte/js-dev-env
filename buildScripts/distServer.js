import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

/* eslint-disable no-console */

app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
app.get('/users',function(req, res){
		res.json([{"id":1, "firstName":"Greg", "lastName":"Ezema", "email":"greg@gmail.com"},
		{"id":2, "firstName":"Austine", "lastName":"Ogbuanya", "email":"greg@gmail.com"},
		{"id":3, "firstName":"Mac", "lastName":"Ugwuanyi", "email":"greg@gmail.com"},
		{"id":4, "firstName":"Mara", "lastName":"Ezeoyili", "email":"greg@gmail.com"},
		{"id":5, "firstName":"Promise", "lastName":"Ugwuanyi", "email":"greg@gmail.com"}])
});
app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+port);
    }
});
