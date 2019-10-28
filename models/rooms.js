'use strict';
module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    room_name: DataTypes.STRING
  }, {});
  rooms.associate = function(models) {
    // associations can be defined here
    rooms.hasOne(models.orders, {
      as: 'order',
      foreignKey: 'room_id',
    })

  };
  return rooms;
};