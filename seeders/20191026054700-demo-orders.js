'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        room_id: 1,
        customer_id: 1,
        is_done: 0,
        is_booked: 1,
        duration: 10,
        order_end_time: '2019-10-21T02:32+00:00'
      },
      {
        room_id: 2,
        customer_id: 2,
        is_done: 0,
        is_booked: 1,
        duration: 10,
        order_end_time: '2019-10-21T02:32+00:00'
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
