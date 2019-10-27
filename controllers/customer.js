const models = require('../models')
const Customers = models.customers

exports.index = (req, res) => {
    Customers.findAll().then(customers=>res.send(customers))
}

exports.show = (req, res) => {
    Customers.findOne({where:{id: req.params.id}}).then(customers=> res.send(customers))
}

exports.store = (req, res) => {
    Customers.create(req.body).then(customers=> {
        res.send({
            message: "success",
            customers
        })
    })
}

exports.update = (req, res) => {
    Customers.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(customers=> {
        res.send({
            message: "success",
            customers
        })
    })
}

exports.delete = (req, res) => {
    Customers.destroy({where: {id: req.params.id}}).then(customers=> {
        res.send({
            message: "success",
            customers
        })
    })
}
