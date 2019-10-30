const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       // console.log(req.originalUrl);
        var dir = `./public/uploads${req.originalUrl}`
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true}, err => {})
        }
        cb(null, dir)
    },
    filename: function (req, file, cb) {
        cb(null, `${req.params.id}.jpg`)
        //   cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

exports.upload = multer({ storage })