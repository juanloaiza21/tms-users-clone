const auth =  require('../middlewares/auth');

exports.login = [
    auth.login
]

exports.refresh = [
    auth.refresh
]

exports.example = [
    auth.verifyToken,
    example.example
]