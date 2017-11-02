

// Module export first mechanism
module.exports.counter= function(arr){
    return "There are "+arr.length+ " elements in this array ";
};


var adder = function(a, b){
  return `The sum of the 2 number is ${a+b}`;
};

var pi = 3.1416;

var printName = function(name){
  return `My name is ${name}`;
};

var printMyDesignation = function(designation){
  return `My designation is ${designation}`;
};

//Module exports seconds mechanism
module.exports.adder = adder ;
module.exports.pi  = pi ;
module.exports.printName = printName ;
module.exports.printMyDesignation = printMyDesignation ;

//Module exports third mechanism
/** module.exports = {
  printName : printName ,
  printMyDesignation : printMyDesignation
} */
