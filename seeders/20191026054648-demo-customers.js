'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [
      {
        name: 'saya',
        identity_number: '113',
        phone_number: '0808080',
        image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      },
      {
        name: 'kamu',
        identity_number: '114',
        phone_number: '0909090',
        image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
