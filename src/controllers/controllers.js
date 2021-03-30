const userMiddleware =  require('../middlewares/user')
const validateDataMiddelware = require('../middlewares/validatedata') 
const responseMiddelware = require('../middlewares/responses')

exports.registerUser = [    
    validateDataMiddelware.validator,
    validateDataMiddelware.format,
    userMiddleware.createUsers,
    responseMiddelware.responseData
]
exports.preregister = [
    validateDataMiddelware.validator,
    validateDataMiddelware.format,
    userMiddleware.newUser,
    responseMiddelware.responseData
]

exports.recoveryPassword = [
    validateDataMiddelware.validator,
    validateDataMiddelware.format,    
    userMiddleware.resetPassword,
    responseMiddelware.responseData

]

exports.login = []
exports.auth = []