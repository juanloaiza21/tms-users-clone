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
    let inserts = []
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let insert = await libFirebase.insert(table,element);
        if(insert.info.status === 201){
            inserts.push(element.id)
        }
    }
    console.log(inserts);
    console.log("tomalo");
}


module.exports = {
    create,
    signInUser,
    recovery,
    createUserAuth,
    verifyUser,
    preregisterFiles
}