const responsesMiddleware = require('./responses');
const axios = require('axios');

async function sendMail(req, res, next) {
    let uri = `${process.env.URL_NOTIFICATIONS}/email/send`
    let data = {
        to: req.body.email, 
        subject: "Comiagro Notifications",
        tittle: "Recuperar Contraseña",
        data: req.objects.data
    }
     try {
         const result = await axios.post(uri,data)
        req.objects.data = result.data
    } catch (error) {
        req.objects =  result.data
        responsesMiddleware.responseData(req, res);
    }
    next();
}


module.exports = {
    sendMail
}