const libFirebase = require('../../../libs/firebase');
const axios =  require('axios');
const FormData = require('form-data');
const fs = require('fs');

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

async function verifyUser(data) {
    let verify  = await libFirebase.getData('users',data)
    if( verify.info.status == 200){
        return verify.data
    }
    else{
        return null;
    } 
}

async function preregisterFiles(data) {
    let uri =  `${process.env.URL_FILES}/files/read/excel`
    //let uri =  `${process.env.URL_FILES}/files/read/csv`
    let file = data.data.files.clients.tempFilePath

    const formData = new FormData();
    formData.append('data', fs.createReadStream(file));
    try {
        
    const res = await axios.post(uri, formData, {
        headers: formData.getHeaders()
      });
      console.log(res);
      return res.data.result
    } catch (error) {
      console.log(error);  
    }
  
   
}

module.exports = {
    create,
    signInUser,
    recovery,
    createUserAuth,
    verifyUser,
    preregisterFiles
}