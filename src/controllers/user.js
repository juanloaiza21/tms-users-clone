const libFirebase = require('../../../libs/firebase');

let table =  'users'

async function create(data){
    let result =  await libFirebase.insert(table,data);
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

async function verifyUser(data) {
    let verify  = await libFirebase.getData(table,data)
    if( verify.info.status == 200){
        return verify.data
    }
    else{
        return null;
    } 
}

async function preregisterFiles(data){
    return await libFirebase.insertMultiData(table,data)
}


module.exports = {
    create,
    signInUser,
    recovery,
    createUserAuth,
    verifyUser,
    preregisterFiles
}