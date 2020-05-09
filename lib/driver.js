'use strict';

const globalEmitter = require('./events.js');
const pickup = require('./handlers.js').driverPickupHandler;
const delivery = require('./handlers.js').driverDeliveredHandler;

//define handlers
function goOutForDelivery(payload) {
    globalEmitter.emit('in-transit',  `${payload.orderId}`);
    setTimeout(()=>{
        globalEmitter.emit('delivered', payload);
    },1000);
};

// attach handlers with listeners
globalEmitter.on('pickup', pickup);
globalEmitter.on('pickup', goOutForDelivery);
globalEmitter.on('delivered', delivery);



