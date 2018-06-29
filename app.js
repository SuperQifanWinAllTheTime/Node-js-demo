var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var dburl = 'mongodb://localhost:27017/demo';

// Use connect method to connect to the server
MongoClient.connect(dburl, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

var express=require('express')
var app=express()
var path=require('path')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'views')))
var busboy = require('connect-busboy');
app.use(busboy()); 
app.set('view engine','ejs');

app.get('/',function(req,res){
	res.render('pages/index')
});
app.get('/upload',function(req,res){
	res.render('pages/insert')
});
//var insert = require('./insert');
app.get('/insert', function(req,res){
	var url =require('url');
	var q=url.parse(req.url,true);
	var qdata=q.query;
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("demo");
  		var myobj =qdata;
  		dbo.collection("document").insertOne(myobj, function(err, res) {
    	if (err) throw err;
    	console.log("1 document inserted");

    	db.close();
  		});	
	//insert(qdata);
    });
	res.render('pages/complete',{arr : qdata})
	//console.log(qdata);
});

app.get('/find',function(req,res){
	res.render('pages/search')
});
app.get('/uploadfile',function(req,res){
	res.render('pages/uploadfile')
});

//var search = require('./search');
app.get('/search',function(req,res){
	var url =require('url');
	var q=url.parse(req.url,true);
	var qdata=q.query;
	var key=qdata.url;
	//console.log(key);
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
  	var dbo = db.db("demo");
  	//var queryforsearch={};
  	//queryforsearch[content]={$regex:/.*"+key+"*./};
  	//var queryforsearch="{\"content\":{$regex:/.*"+key+"*./}}";
  	//console.log(queryforsearch);
  	dbo.collection("document").find({"content": new RegExp(key)}).toArray(function(err, result) {
    	if (err) throw err;
   		var myobj=result;
   		res.render('pages/results',{arr : myobj})
   		db.close();
  		});
	});
});

var formidable = require('formidable');
var fs=require('fs');
app.post('/fileupload',function(req,res){
	var fstream;
	var filenamereturn; 
    req.pipe(req.busboy);
    filenamereturn=req.busboy.on('file', function (fieldname, file, filename) {
    	filenamereturn = filename;
        console.log("Uploading: " + filename); 
        fstream = fs.createWriteStream('C:/data/db/' + filename);
        file.pipe(fstream);
		var MongoClient = require('mongodb').MongoClient;
		var url = "mongodb://localhost:27017/";

		MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("demo");
  		var myobj ={document : filename, url :'C:/data/db/' + filename };
  		dbo.collection("document").insertOne(myobj, function(err, res) {
    	if (err) throw err;
    	console.log("1 document inserted");
    	db.close();
    
  			});	

  		});
        fstream.on('close', function () {
        });
        return filenamereturn;
    });
    
   // console.log(filenamereturn);
   //callback( console.log(filenamereturn));
    res.render('pages/index')
    //res.render('pages/uploadcomplete',{filename : filenamereturn})
/*
var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/data/db/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;      
      console.log("1 file uploaded");
      });
    });
    */
      
});

app.listen(8080);
console.log('now listen to port 8080');

/*
const http = require('http');
const hostname='127.0.0.1';
const port = 3000;

// generate first page
const fs =require('fs');

// read first page
fs.readFile('index.html',(err,html)=>{
	// if read error
	if(err){
		throw err;
	}
	//else start server and load first page
	const server = http.createServer((req,res) =>{
	res.statusCode= 200;
	res.setHeader('Content-type','text/html');
	res.write(html);
	res.end();
	});

	// server side information
	server.listen(port,hostname,()=>{
	console.log('Server started on port '+port);
	});

});
*/
/*

app.post('/route',function(req,res){
    let inputContent = req.body.textFild;
    console.log("im in app.js");
    console.log(inputContent);
    console.log("i am done in APP")
});

*/