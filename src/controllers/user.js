const libFirebase = require('../libs/firebase') 

async function create(data){
    let result =  await libFirebase.insert('users',data);
    return result;
}

async function recovery(data){
    let result =  await libFirebase.recovery(data);
    return result;
}

module.exports = {
    create,
    recovery
}