const notificationsController =  require('../controllers/notifications')

async function activateEmail(req, res, next) {
    let result = await notificationsController.activate(req.objects.data)
    result.data.info.message = "user created " +  result.data.info.message
    req.objects.response = result.data;
    next();
}

module.exports = {
    activate: activateEmail
}