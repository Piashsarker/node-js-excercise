var http = require('http');


var server  = http.createServer(function(req,res){
     console.log('Request was made: '+req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("Everything ok from server.");
});


server.listen(3000,'localhost');
console.log("Server is listening in 3000 PORT ");
