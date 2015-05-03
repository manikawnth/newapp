var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var	path	= require('path');

//app.use(express.static(__dirname+'/client/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var options = {root:path.resolve(__dirname,'./client/')}

app.get('/',function(req,res){
	res.sendFile('./login.html',options,function(err){
		console.log(res.statusCode);
	});

});

app.post('/main',function(req,res){
	console.log(req.body);
	res.sendFile('./main.html',options,function(err){
		console.log(res.statusCode);
	});

});

app.listen(process.env.PORT || 3031,function(){
	console.log('listening on port 3031');
});
