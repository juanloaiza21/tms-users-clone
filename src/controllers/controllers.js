const userMiddleware =  require('../middlewares/user')
const validateDataMiddelware = require('../middlewares/validatedata') 
const responseMiddelware = require('../middlewares/responses')


// exports.registerUser = [
//     validateDataMiddelware.format,
//     // 
//     // responseMiddelware.response
// ]

exports.registerUser = [    
    validateDataMiddelware.format,
    userMiddleware.createUsers,
    responseMiddelware.responseData
]
exports.preregister = []
exports.recoveryPassword = []
exports.login = []
exports.auth = []