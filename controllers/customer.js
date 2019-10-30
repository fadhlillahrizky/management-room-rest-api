const models = require('../models')
const Customers = models.customers

exports.index = (req, res) => {
    Customers.findAll(
        {
            order: [
              ['id', 'ASC']
            ]
          }
    ).then(customers=>res.send(customers))
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

exports.profileUpload = (req, res) => {
    // Customers.update(
    //     {image: req.file.path},
    //     {where:{id: req.params.id}})
    console.log(req.originalUrl);
    
    res.status(200).json({
        filePath: req.file.path,
        massage: "success!"
    });
    
}