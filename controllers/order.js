const models = require('../models')
const Order = models.orders
const Room = models.rooms
const Customer = models.customers



exports.show = (req, res) => {
  Order.findOne({
    where: { id: req.params.id },
  }).then(order => res.send(order))
}

exports.store = (req, res) => {
  Order.create(req.body).then(order => {
    res.send({
      message: "success",
      order
    })
  })
}

exports.update = (req, res) => {
  Order.update(
    req.body,
    { where: { id: req.params.id } }
  ).then(order => {
    res.send({
      message: "success",
      order
    })
  })
}

exports.delete = (req, res) => {
  Order.destroy({ where: { id: req.params.id } }).then(order => {
    res.send({
      message: "success",
      order
    })
  })
}

exports.chekin = (req, res) => {
  Room.findAll(
    {
      include: [{
      required: false,
        model: Order,
        as: "order",
        where: {
          is_booked: 1,
        },
        include: [{
          model: Customer,
          as: "customer",
        }],
      }],
      room: [
        ['id', 'ASC']
      ]
    }
  ).then(room => res.send(room))
}