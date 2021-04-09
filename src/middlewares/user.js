const userController = require('../controllers/user');

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
    req.objects.verify =  await userController.verifyUser(req.objects.data)
    req.objects.data.displayName = req.objects.data.name 
    if(req.objects.verify.id === req.objects.data.id){
    next();
    }
    else{
    res.status(400);
    }
}

async function preregisterFiles(req,res,next){
    req.objects.data = await userController.preregisterFiles(req.objects.data);
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