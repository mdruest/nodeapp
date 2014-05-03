/*
var http =require('http');

http.createServer(function(req,res){

	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello');
	
}).listen(1337,'127.0.0.1');

console.log('Webserver has started');
*/

var http =require('http');
var fs =require('fs');
var os =require('os');

http.createServer(
	function(req,res){

		fs.readFile('index.html',function(err,data){
			res.writeHead(200,{'Content-type':'text/html'});
		//res.end(data);

		res.write("<h1>MY OS</h1>");

		res.write("<br/>os.tmpdir()=<b>"+os.tmpdir()+"</b>");
		res.write("<br/>os.endianness()=<b>"+os.endianness()+"</b>");
		res.write("<br/>os.hostname()=<b>"+os.hostname()+"</b>")
		res.write("<br/>os.type()=<b>"+os.type()+"</b>");
		res.write("<br/>os.platform()=<b>"+os.platform()+"</b>");
		res.write("<br/>os.arch()=<b>"+os.arch()+"</b>");
		res.write("<br/>os.release()=<b>"+os.release()+"</b>");
		res.write("<br/>os.uptime()=<b>"+os.uptime()+"</b>");
		res.write("<br/>os.loadavg()=<b>"+os.loadavg()+"</b>");
		res.write("<br/>os.totalmem()=<b>"+os.totalmem()+"</b>");
		res.write("<br/>os.freemem()=<b>"+os.freemem()+"</b>");
		res.write("<br/>os.cpus()=<b>"+os.cpus()+"</b>");
		res.write("<br/>os.networkInterfaces()=<b>"+os.networkInterfaces()+"</b>");


		res.write("<br/><h1>HELLO</h1>");
		res.end(data);
	});
	
}).listen(1337,'127.0.0.1');

console.log('Webserver has started');