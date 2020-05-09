const globalEmitter = require('./events.js');
const faker = require('faker');
const handler = require('./handlers.js').vendorDeliveredHandler;

//attach handlers with listeners
globalEmitter.on('delivered', handler);


//raise/emit events
setInterval(() => {
  const order = {
    time: faker.date.recent(),
    store: faker.company.companyName(),
    orderId: faker.random.number(),
    customer: faker.name.findName(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.zipCode()}`,
  };

  globalEmitter.emit('pickup', order);
}, 5000);



