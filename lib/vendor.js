const globalEmitter = require('./events.js');
const faker = require('faker');


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

function vendorHandler (payload){
  console.log(
    `Vendor thanks for delivering order ${payload.orderID}`,
  );
}
globalEmitter.on('delivered', vendorHandler);

module.exports ={vendorHandler};
