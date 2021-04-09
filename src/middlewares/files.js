const filesController = require('../controllers/files');
const responsesMiddleware = require('./responses');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function verifyTypeFileRoute(req, res, next) {
    let routes = await filesController.verifyTypeFileRoute(req.files.clients.mimetype);
    if (routes.errors) {
        req.objects = routes
        responsesMiddleware.responseData(req, res);
    }
    req.objects.routes = routes;
    next();
}

 async function sendFile(req, res, next) {
    let uri = `${process.env.URL_FILES}${req.objects.routes.route}`
    let file = req.objects.data.files.clients.tempFilePath
    
    const formData = new FormData();
    formData.append(req.objects.routes.type, fs.createReadStream(file));
     try {
         const result = await axios.post(uri, formData, {
             headers: formData.getHeaders()
         });
        req.objects.data = result.data.result
    } catch (error) {
        req.objects =  result.data
        responsesMiddleware.responseData(req, res);
    }
    next();
}


module.exports = {
    verifyTypeFileRoute: verifyTypeFileRoute,
    sendFile: sendFile
}