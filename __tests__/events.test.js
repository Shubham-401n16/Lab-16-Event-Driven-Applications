'use strict';
const handler = require('../lib/handlers.js')

let consoleSpy = jest.spyOn(console, 'log');

describe('Handler', () => {
    it('can log pickup handler', () => {
        consoleSpy.mockClear();

        let payload = {
          time: '8 Apr',
          store:'st',
          orderId: 5565,
          customer: 'Test',
          address: 'Bellevue',
        };

        handler.driverPickupHandler(payload);
        expect(consoleSpy).toHaveBeenCalledWith(`Driver is picking up order ${payload.orderId}`);
    });

    it('can log inTransitHandler', () => {
        consoleSpy.mockClear();
  
        let payload = {
            time: '8 Apr',
            store:'st',
            orderId: 5565,
            customer: 'Test',
            address: 'Bellevue',
          };
  
          handler.driverDeliveredHandler(payload);
        setTimeout(() => {
          expect(consoleSpy).toHaveBeenCalledWith(`Delivered order ${payload.orderId}`);
        }, 3000);
    });

    it('can log vendor handler', () => {
        consoleSpy.mockClear();
        let payload = {
            time: '8 Apr',
            store:'st',
            orderId: 5565,
            customer: 'Test',
            address: 'Bellevue',
          };
  
          handler.vendorDeliveredHandler(payload);
        setTimeout(() => {
          expect(consoleSpy).toHaveBeenCalledWith(`Vendor thanks for delivering order ${payload.orderId}`);
        }, 5000);
    });

    it('can log in transit order logger', () => {
        consoleSpy.mockClear();
        let payload = {
            time: '8 Apr',
            store:'st',
            orderId: 5565,
            customer: 'Test',
            address: 'Bellevue',
          };
  
          handler.inTransitOrderLogger(payload);
        expect(consoleSpy).toHaveBeenCalledWith(`EVENT in-transit ${payload.orderId}`);
    });

    it('can log in transit order loggerdelivered order logger', () => {
      consoleSpy.mockClear();
      let payload = {
          time: '8 Apr',
          store:'st',
          orderId: 5565,
          customer: 'Test',
          address: 'Bellevue',
        };

        handler.deliveredOrderLogger(payload);
      expect(consoleSpy).toHaveBeenCalledWith(`Delivered order ${payload.orderId}`);
  });

it('can log pickup order logger', () => {
  consoleSpy.mockClear();
  let payload = {
      time: '8 Apr',
      store:'st',
      orderId: 5565,
      customer: 'Test',
      address: 'Bellevue',
    };

    handler.pickupOrderLogger(payload);
  expect(consoleSpy).toHaveBeenCalledWith('EVENT pickup')
  expect(consoleSpy).toHaveBeenCalledWith('- Time:', payload.time)
  expect(consoleSpy).toHaveBeenCalledWith('- Store:', payload.store)
  expect(consoleSpy).toHaveBeenCalledWith('- OrderID:', payload.orderId)
  expect(consoleSpy).toHaveBeenCalledWith('- Customer:', payload.customer)
  expect(consoleSpy).toHaveBeenCalledWith('- Address:', payload.address)

});

});

