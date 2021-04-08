const userMiddleware =  require('../middlewares/user')
const validateDataMiddelware = require('../middlewares/validatedata') 
const responseMiddelware = require('../middlewares/responses')

exports.registerUser = [    
    validateDataMiddelware.validator,
    validateDataMiddelware.format,
    userMiddleware.createUsersBD,
    responseMiddelware.responseData
]
exports.preregister = [
    validateDataMiddelware.validator,
    validateDataMiddelware.format,
    userMiddleware.verifyUser,
    userMiddleware.createUsers,
    responseMiddelware.responseData
]
exports.recoveryPassword = [
    validateDataMiddelware.validator,
    validateDataMiddelware.format,    
    userMiddleware.resetPassword,
    responseMiddelware.responseData

]

exports.loginUser = [
    validateDataMiddelware.validator,
    validateDataMiddelware.format,    
    userMiddleware.signInUser,
    responseMiddelware.responseData

]

exports.compareData =[
    validateDataMiddelware.validator,
    validateDataMiddelware.format,
]