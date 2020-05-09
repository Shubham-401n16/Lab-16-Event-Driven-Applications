'use strict';

function vendorDeliveredHandler (payload){
    console.log(
      `Vendor thanks for delivering order ${payload.orderID}`,
    );
  }

  function driverPickupHandler(payload) {
    console.log(`Driver is picking up order ${payload.orderId}`);
}

function  driverDeliveredHandler(payload) {
        console.log(`Delivered order ${payload.orderId}`);
  
}

const pickupOrderLogger = (payload) => {
    console.log('EVENT pickup');
    console.log('- Time:', payload.time);
    console.log('- Store:', payload.store);
    console.log('- OrderID:', payload.orderId);
    console.log('- Customer:', payload.customer);
    console.log('- Address:', payload.address);
};

const inTransitOrderLogger = (payload) => {
    console.log(`EVENT in-transit ${payload.orderId}`);
};

function deliveredOrderLogger(payload) {
        console.log(`Delivered order ${payload.orderId}`);
};

module.exports = {
    vendorDeliveredHandler,
    driverPickupHandler,
    driverDeliveredHandler,
    pickupOrderLogger,
    inTransitOrderLogger,
    deliveredOrderLogger,
};