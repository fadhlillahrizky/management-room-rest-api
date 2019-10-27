'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'admin@gmail.com',
        password: 'rahasia',
      },
      {
        username: 'jhon.doe@gmail.com',
        password: 'secret',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};