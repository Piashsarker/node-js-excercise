
console.log('Global Object Excercise  ');
console.log(__dirname);
console.log(__filename );
var time = 0 ;
setTimeout (function(){
 console.log("3 Second passed .");
},3000);


var timer = setInterval(function(){
  time+= 2 ;
 console.log(time+" seconds have passed. ");
 if(time==10){
   clearInterval(timer);
 }
},2000);
