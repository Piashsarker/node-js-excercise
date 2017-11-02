
var http = require('http');
var fs  = require('fs');


var server  = http.createServer(function(req,res){
     console.log('Request was made: '+req.url);

     if(req.url==='/home'|| req.url ==='/'){
       res.writeHead(200, {'Content-Type':'text/html'});
       fs.createReadStream(__dirname+'/index.html','utf8').pipe(res);
     }else if(req.url ==='/contact'){
       res.writeHead(200, {'Content-Type':'text/html'});
       fs.createReadStream(__dirname+'/index.html','utf8').pipe(res);
     }
     else if(req.url==='/api/members'){

       var members = [{name:'Piash',age:'22',contact:'piash@dcastalia.com'}
                      ,{name:'Anjan',age:'22',contact:'anjan@dcastalia.com'},
                      {name:'Masud',age:'24',contact:'masud@dcastalia.com'}
              ]
       res.writeHead(200,{'Content-Type':'application/json'});
       res.end(JSON.stringify(members));
     }else{
       res.writeHead(404,{'Content-Type':'text/html'})
       fs.createReadStream(__dirname+'/error.html','utf8').pipe(res);
     }

});


server.listen(3000,'localhost');
console.log("Server is listening in 3000 PORT ");
