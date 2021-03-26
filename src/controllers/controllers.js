const auth = require('../middlewares/auth');

exports.login = [auth.login];
exports.refresh = [auth.refresh];
exports.register =[];
exports.preregister=[auth.verifyToken];
exports.example = [auth.verifyToken];
exports.resetpassword=[];
