const jwt = require('jsonwebtoken');
const User = require('../models/user')

let login = async (req, res) => {
    //buscar usuario
    let user = req.body.user
    let password = req.body.password
    // Prueba
    const userData = await User.findOne({ user })

    if (user === userData.user && password === userData.password) {
        jwt.sign({ user: user }, process.env.KEY, { expiresIn: '32s' }, (error, token) => {
            res.json({
                token
            })
        })
    }
    else {
        res.sendStatus(403);
    }
}


//Authorization: Bearer <token>
function verifyToken(req, res, next) {
    console.log(req.headers);
    let bearHeader = req.headers['authorization']

    if (typeof bearHeader !== 'undefined') {
        const bearToken = bearHeader.split(" ")[1];
        req.token = bearToken
        next();
    } else {
        res.sendStatus(403);
    }
}


function refresh(req, res) {
    console.log(req.body);
    var username = req.body.username
    var refreshToken = req.body.refreshToken
    if ((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == username)) {
        var user = {
            'username': 'jorge',
            'role': 'admin'
        }
        var token = jwt.sign(user, process.env.KEY, { expiresIn: 300 })
        res.json({ token: 'JWT ' + token })
    }
    else {
        res.send(401)
    }
}

module.exports = {
    login,
    verifyToken,
    refresh
}