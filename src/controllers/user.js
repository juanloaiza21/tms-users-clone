const libFirebase = require('../libs/firebase') 

async function create(data){
    let result =  await libFirebase.createUsers(data);
    return result;
}

async function recovery(data){
    let result =  await libFirebase.resetPasword(data);
    return result;
}

module.exports = {
    create,
    recovery
}