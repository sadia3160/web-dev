// EVENT DRIVEN PROGRAMMING

const EventEmitter = require('events'); //eventemitter is a class

const customEmitter = new EventEmitter(); //instance

customEmitter.on('response', () =>{
    console.log("Okay, received!");
} );   //on = listen or define for an event 

customEmitter.on('response', (item) =>{
    console.log("Okay, received! "+item);
} );   //on = listen or define for an event 

//customEmitter.emit('response');  //emit = emit or trigger an event
customEmitter.emit('response', 'books');

 