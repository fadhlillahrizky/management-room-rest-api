const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const multer = require("multer");
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

//controllers
const AuthController = require('./controllers/auth')
const CustomerController = require('./controllers/customer')
const RoomController = require('./controllers/room')
const OrderController = require('./controllers/order')

//middlewares
const { authenticated } = require('./middleware')
//upload
const { upload } = require('./upload')

app.group("/api/v2", (router) => {

    //auth API
    router.post('/login', AuthController.login)

    //upload API
    router.post('/upload', upload.single('profileImage'), CustomerController.profileUpload);

    //Customer API
    router.get('/customers', authenticated, CustomerController.index)    
    router.get('/customer/:id', authenticated, CustomerController.show)    
    router.post('/customer', authenticated, CustomerController.store)    
    router.patch('/customer/:id', authenticated, CustomerController.update)    
    router.delete('/customer/:id', authenticated, CustomerController.delete)   
    router.delete('/customer/:id/profile', authenticated, CustomerController.delete)

    //Rooms API
    router.get('/rooms', RoomController.index)    
    router.get('/room/:id', RoomController.show)    
    router.post('/room', authenticated, RoomController.store)    
    router.put('/room/:id', authenticated, RoomController.update)    
    router.delete('/room/:id', authenticated, RoomController.delete)

    //checkin API
    router.get('/checkin', OrderController.chekin)    

    //Order API
    router.get('/order/:id', authenticated, OrderController.show)    
    router.post('/order', authenticated, OrderController.store)    
    router.patch('/order/:id', authenticated, OrderController.update)    

    //another APIs goes here
})

app.listen(process.env.PORT||9900, function(){ console.log(`Listening on port ${port}!`)})
//app.listen(port, () => console.log(`Listening on port ${port}!`))