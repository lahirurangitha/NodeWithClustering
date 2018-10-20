var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (event) {
  console.log('event process :'+event);
}

//Assign the event handler to an event:
// eventEmitter.on(event, (event) => myEventHandler);

exports.triggerEvent = function(type){
    console.log(type);
}

exports.handleEvent = function (event) {
    //Fire the 'scream' event:
    // eventEmitter.emit(event);
    console.log(event);
};
