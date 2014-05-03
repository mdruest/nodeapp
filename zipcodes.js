var http =require('http');
var zipcode=require('zipcode');

http.createServer(function(req,res){
	/*fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data);
		var zc =zipcode.lookup('63021'); 
	});*/
	
}).listen(1337,'127.0.0.1');

console.log('Webserver has started');
var zc =zipcode.lookup('63021'); 
console.log('Your zip code='+zc);
var zc =zipcode.lookup('63023'); 
console.log('Your zip code='+zc);