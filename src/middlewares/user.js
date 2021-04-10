const userController = require('../controllers/user');
const responsesMiddleware = require('./responses');

async function createUsersBD(req, res, next) {
    req.objects = await userController.create(req.objects.data)
    next();
}

async function signInUser(req, res, next) {
    req.objects = await userController.signInUser(req.objects.data)
    next();
}

async function resetPassword(req, res, next) {
    req.objects = await userController.recovery(req.objects.data)
    next();
}

async function createUsers(req, res, next) {
    req.objects = await userController.createUserAuth(req.objects.data)
    next();
}
async function verifyUser(req, res, next) {
    let verify = await userController.verifyUser(req.objects.data)
    if (verify.info.status === 400) {
        req.objects = verify;
        responsesMiddleware.responseData(req, res);
    }
    else {
        req.objects.data.displayName = req.objects.data.name
        if (verify.data.id != req.objects.data.id) {

        }
        next();
    }

}

async function preregisterFiles(req, res, next) {
    req.objects = await userController.preregisterFiles(req.objects.data);
    next();
}

module.exports = {
    createUsersBD,
    resetPassword,
    signInUser,
    verifyUser,
    createUsers,
    preregisterFiles
}