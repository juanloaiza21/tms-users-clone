const libFirebase = require('../../../libs/firebase') 

async function create(data){
    let result =  await libFirebase.insert('users',data);
    return result;
}

async function signInUser(data){
    let result =  await libFirebase.signIn(data);
    return result;
}

async function recovery(data){
    let result =  await libFirebase.recovery(data);
    return result;
}

async function createUserAuth(data) {
    let result =  await libFirebase.createUsers(data)
    return result;
}

async function compareData(data) {
    let result =  await libFirebase.getDataNoResponse(`users`, `${data}`);
    return result;
}
async function verifyUser(data) {
    let verify  = await libFirebase.getData('users',data)
    if( verify.info.status == 200){
        return verify.data
    }
    else{
        return null;
    } 
}

module.exports = {
    create,
    signInUser,
    recovery,
    createUserAuth,
    verifyUser,
}