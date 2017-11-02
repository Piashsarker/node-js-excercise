//normal function statement

function sayHi(){
  console.log("Hi from Piash Sarker");
}
// fucntion invoke or calling
sayHi();

//fucntion expression

var sayBye = function(){
  console.log("Bye from Piash Sarker.");
};

sayBye();

function callFunction(funName){
  funName();
}

var printName = function(){
  console.log("My Name is Piash Sarker.");
};

callFunction(printName);
