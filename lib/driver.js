'use strict';

const globalEmitter = require('./events.js');

function pickupHandler(payload) {
    console.log(`Driver is picking up order ${payload.orderId}`);
    globalEmitter.emit(`in-transit order ${payload.orderId}`);
}

function inTransitHandler(payload) {
    setTimeout(() => {
        console.log(`Delivered order ${payload.orderId}`);
        globalEmitter.emit('delivered', payload);
    }, 3000);
}


globalEmitter.on('pickup',pickupHandler);
globalEmitter.on('in-transit', inTransitHandler);

module.exports ={pickupHandler, inTransitHandler};