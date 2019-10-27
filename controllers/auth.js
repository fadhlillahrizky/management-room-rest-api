const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.users

exports.login = (req, res)=>{    
    const username = req.body.username
    const password = req.body.password //use encryption in real world case!

    User.findOne({where: {username, password}}).then(users=>{
        if(users){
            const token = jwt.sign({ userId: users.id }, 'my-secret-key')
            res.send({
                id: users.id,
                username: users.username,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong username or Password!"
            })
        }
    })
}
exports.register = (req, res)=>{
    const username = req.body.username
    const password = req.body.password 
             User.create({
                username,
                password
            }).then(result=> {
                const token = jwt.sign({ userId: result.dataValues.id }, 'my-secret-key');
                res.send({
                    message: "success",
                    data: {
                        id: result.dataValues.id.toString(),
                        name: result.dataValues.name,
                        username: result.dataValues.username,
                        token: token
                    }
                })
            }).catch(err => console.log(err)) 
}