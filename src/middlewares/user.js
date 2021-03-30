const userController = require('../controllers/user');

async function createUsers(req, res, next) {
    req.objects.data = userController.create(req.objects.data)
    next();
}

async function resetPassword(req, res, next) {
    req.objects.data = userController.recovery(req.objects.data)
    next();
}

module.exports = {
    createUsers,
    resetPassword
}