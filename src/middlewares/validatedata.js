const {validationResult} = require('express-validator');

function validationData(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next();
}

function formatData(req, res, next) {
    req.objects = {};
    req.objects.info = {}
    switch (req.method) {
        case 'POST':
            req.objects.data = req.body
            if(req.files){
                req.objects.data.files = req.files
            }
            break;
        case 'GET':
            req.objects.data = req.query
            break;
        default:
            break;
    }
    next();
}

module.exports = {
    validator: validationData,
    format: formatData
}