const libSender =  require('../libs/api');
const registerTemplate =  require('../models/template/register');
const { succesResponse, errorsResponse } = require('../libs/response');
const url = process.env.URL_NOTIFICATIONS


async function activeUserNotifications(data){
    let dataFormat = {
        to:data.user.email,
        subject: "Comiagro Notifications",
        html: registerTemplate.registerTemplate(data.link,data.user.displayName)
    }
    try {
        let sender = await libSender.post(`${url}/email/send`,dataFormat);
        return sender;
    } catch (error) {
        return errorsResponse(400,error.message);
    }
  
}


module.exports ={
    activate: activeUserNotifications,
    recovery: activeUserNotifications
}