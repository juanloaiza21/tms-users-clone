const userController = require('../controllers/user');

async function createUsers(req, res, next) {
    req.objects = await userController.create(req.objects.data)
    next();
}

async function resetPassword(req, res, next) {
    req.objects = await userController.recovery(req.objects.data)
    next();
}

async function newUser(req, res, next) {
    req.objects = await userController.newUser(req.objects.data)
    next();
}

module.exports = {
    createUsers,
    resetPassword,
    newUser
}