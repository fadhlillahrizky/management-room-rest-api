'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    room_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    is_done: DataTypes.INTEGER,
    is_booked: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
    orders.belongsTo(models.customers, {
      as: 'customer',
      foreignKey: 'customer_id',
    })
    orders.belongsTo(models.rooms, {
      as: 'orders',
      foreignKey: 'room_id',
    })

  };
  return orders;
};