'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [
      {
        name: 1,
        identity_number: '113',
        phone_number: '0808080',
        image: 'image_url',
      },
      {
        name: 2,
        identity_number: '114',
        phone_number: '0909090',
        image: 'image_url',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
