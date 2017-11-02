var fs = require('fs');

// Crating directory sync
// fs.mkdirSync('stuff');
// console.log("New directory created ..");
// fs.rmdirSync('stuff');
// console.log("Directory remove .");

fs.mkdir('stuff',function(){
   fs.readFile('readMe.txt','utf8',function(err,data){
     fs.writeFile('./stuff/writeMe.file',data, function(err){
       console.log(err);
     });
   });
});

// For removing

//fs.unlink('./stuff/writeMe.file',function(){
//  fs.rmdir('stuff');
// });
