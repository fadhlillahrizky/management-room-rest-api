const models = require('../models')
const Room = models.rooms

exports.index = (req, res) => {
  Room.findAll(
    {
      order: [
        ['id', 'ASC']
      ]
    }
  ).then(room => res.send(room))
}

exports.show = (req, res) => {
  Room.findOne({ where: { id: req.params.id } }).then(room => res.send(room))
}

exports.store = (req, res) => {
  Room.create(req.body).then(room => {
    res.send({
      message: "success",
      room
    })
  })
}

exports.update = (req, res) => {
  Room.update(
    req.body,
    { where: { id: req.params.id } }
  ).then(room => {
    res.send({
      message: "success",
      room
    })
  })
}

exports.delete = (req, res) => {
  Room.destroy({ where: { id: req.params.id } }).then(room => {
    res.send({
      message: "success",
      room
    })
  })
}
