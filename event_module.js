var events = require('events');
var util = require('util');


var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message){
  console.log(message);
});

myEmitter.emit('someEvent'," The event is emitted");


//critical event example

var Person = function(name){
  this.name  = name ;
};

util.inherits(Person , events.EventEmitter);

var piash = new Person('Piash Sarker');
var anjan = new Person ('Anjan');
var masud = new Person('Masud');
var people = [piash, anjan , masud];

people.forEach(function(person){
    person.on('speak', function(message){
        console.log(person.name+" Says "+message);
    });
});
piash.emit('speak',"Today is anjan's vai Birthday.");
masud.emit('speak'," I want treat from anjan ");
anjan.emit('speak'," Let's have lunch in Tastebud");
