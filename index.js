import express from 'express';
import { createConnection } from 'mysql';
const db=createConnection({
    host:'3000',
    user:'root',
    password:'yazeed0598794803'
});
db.connect(err=>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected')
})
const app=express();
app.get('createDb',(req,res)=>{
    let sql='create database';
    db.query(sql,(err,result)=>{
        res.send('database creates');
    });
});
app.listen('3000',() =>{
    console.log('Server stated on port 3000');
})

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
