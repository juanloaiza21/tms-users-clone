const userController = require('../controllers/user');

async function createUsers(req, res, next) {
    req.objects.data = userController.create(req.objects.data)
    next();
}

module.exports = {
    createUsers
}