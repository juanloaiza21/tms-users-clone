const jwt = require('jsonwebtoken');
const User = require('../models/user')

let login = async (req, res) => {

    let user = req.body.user
    let password = req.body.password

    //const userData = await User.findOne({ user })

    if (user === 'jorge' && password === 'jorge') {
        userData = {
            user: 'jorge',
            company: 'comiagro',
            role: 'admin'

        }
        jwt.sign({ user: userData },process.env.KEY, { expiresIn: '32s' }, (error, token) => {
            res.json({
                token
            })
        })
    }
    else {
        res.sendStatus(403);
    }
}

function verifyToken(req, res, next) {
    console.log(req.headers);
    let bearHeader = req.headers['authorization']

    if (typeof bearHeader !== 'undefined') {
        const bearToken = bearHeader.split(" ")[1];
        req.token = bearToken
        next();
    } else {
        res.status(400).send({ error:{
            token: "Invalid"
        }
    });
    }
}


function refresh(req, res) {
    console.log(req.body);
    var username = req.body.username
    var refreshToken = req.body.refreshToken
    if ((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == username)) {
        var user = {
            'username': 'jorge',
            'company':'comiagro',
            'role': 'admin'
        }
        var token = jwt.sign(user, process.env.KEY, { expiresIn: 300 })
        res.json({ token: 'JWT ' + token })
    }
    else {
        res.status(500).send({ error: "boo:(" });
    }
}

module.exports = {
    login,
    verifyToken,
    refresh
}