const EventEmitter = require('events');

let eventEmitter = new EventEmitter();

eventEmitter.on('subscribe',(msg)=>{
    console.log('Thanks for subscribing to ',msg);
});

eventEmitter.emit('subscribe','College Wallah');


console.log('Default max number of event listeners are:',EventEmitter.defaultMaxListeners)
eventEmitter.setMaxListeners(5)
console.log('The updated max number of event listeners are :', eventEmitter.getMaxListeners())
