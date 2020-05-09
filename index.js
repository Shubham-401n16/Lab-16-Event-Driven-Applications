'use strict';
const globalEmitter = require('./lib/events.js');

const pickup = require('./lib/handlers.js').pickupOrderLogger;
const inTransit = require('./lib/handlers.js').inTransitOrderLogger;
const delivered = require('./lib/handlers.js').deliveredOrderLogger;

//attach handlers with listeners
globalEmitter.on('pickup',pickup);

require('./lib/driver.js');
require('./lib/vendor.js');

globalEmitter.on('in-transit', inTransit);
globalEmitter.on('delivered', delivered);