const driver = require('../lib/driver.js');
const vendor = require('../lib/vendor.js');

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

        driver.pickupHandler(payload);
        expect(consoleSpy).toHaveBeenCalled();
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
  
        driver.inTransitHandler(payload);
        setTimeout(() => {
          expect(consoleSpy).toHaveBeenCalledWith('Delivered order 5565');
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
  
        vendor.vendorHandler(payload);
        setTimeout(() => {
          expect(consoleSpy).toHaveBeenCalled('Vendor thanks for delivering order 5565');
        }, 3000);
    });
});