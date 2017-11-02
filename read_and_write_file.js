var fs = require('fs');

//Read
var file =  fs.readFileSync('readMe.txt','utf8');
console.log(file);
// Writing File
fs.writeFileSync('writeMe.txt',file+". Added New text. ");

//Reading the write me file .
var newFile = fs.readFileSync('writeMe.txt','utf8');
console.log(newFile);

//Asynce Call

fs.readFile('readMe.txt','utf8',function(err,data){
  console.log(data);
  fs.writeFile('writeMeAgain.txt',data,function(error){
    
  });
});
