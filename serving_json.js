
var fs = require('fs');
var http = require('http');


var server  = http.createServer(function(req,res){
     console.log('Request was made: '+req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myObj = {
      name: 'Piash',
      job : 'Software Engineer',
      age : 22
    };
  res.end(JSON.stringify(myObj));
});


server.listen(3000,'localhost');
console.log("Server is listening in 3000 PORT ");
