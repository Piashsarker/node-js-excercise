
var fs = require('fs');
var http = require('http');


var server  = http.createServer(function(req,res){
     console.log('Request was made: '+req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
    myReadStream.pipe(res); 
});


server.listen(3000,'localhost');
console.log("Server is listening in 3000 PORT ");
