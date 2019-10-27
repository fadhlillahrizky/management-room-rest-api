const models = require('../models')
const Order = models.orders

exports.index = (req, res) => {
    Order.findAll(
        {
            order: [
                ['id', 'ASC']
            ]
        }
    ).then(order => res.send(order))
}

exports.show = (req, res) => {
    Order.findOne({ where: { id: req.params.id } }).then(order => res.send(order))
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
