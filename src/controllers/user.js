const libFirebase = require('../libs/firebase') 

async function create(data){
    let result =  await libFirebase.insert('users',data);
    return result;
}

async function login(data){
    let result =  await libFirebase.login(data);
    return result;
}

async function recovery(data){
    let result =  await libFirebase.recovery(data);
    return result;
}

async function newUser(data) {
    let result =  await libFirebase.createUsers(data)
    return result;
}

async function compareData(data) {
    let result =  await libFirebase.getDataNoResponse(`users`, `${data}`);
    return result;
}
async function compareData(data, res, req) {
    console.log(`Lo que llega a la función es ${data}`);
    let result =  await libFirebase.getDataNoResponse(`users`, `${data.id}`);
    console.log(`La que sale de la función es ${result}`);    
    if (result===data) {
            console.log(result);
            let result1 =validators.validator(result);
            let result2 = validator.format(result1)
            return newUser(result2);
        } else {
        result=undefined
        return newUser (result);
        }
 
}

module.exports = {
    create,
    login,
    recovery,
    newUser,
    compareData,
}