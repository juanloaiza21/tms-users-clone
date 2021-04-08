const { app } = require("firebase-admin")
const { check, validationResult } = require('express-validator');

function preRegisterSchema(data){
    let infoData = {
        id: data.id,
        name:data.name,
        email:data.email,
        address:data.address,
        phoneNumber:data.phoneNumber
    }
    return infoData
}

const userRegisterRules = {
  id: {
      in: ['body'],
      isNumeric:true,
      notEmpty: true,
      isLength: {
          errorMessage: 'nit must be betwen 5 an 30 characters',
          options: { min: 5, max: 30 },
      },
  },
  name: {
      in: ['body'],
      notEmpty: true,
      isLength:{
          erroMessage: `Name must be at least 5 characters`,
          options: {min:5},
      }
  },
  birthday:{
      in: [`body`],
      notEmpty: false,
  },
  email: {
      in: [`body`],
      notEmpty: true,
  },
  phoneNumber: {
      in: [`body`],
      notEmpty: true,
  }
}

const loginUserRules = {
    email: {
        in: [`body`],
        notEmpty: true,
    },
    password: {
      in: [`body`],
      notEmpty: true,
      isLength:{
        errorMessage: `Password must be at least 8 characters`,
        options: {min:8, max:64}
      }
    }
  }

const userResetpasswordRules = {
  email: {
      in: [`body`],
      notEmpty: true,
  }
}


const newUserRules = {
  id: {
      in: ['body'],
      isNumeric:true,
      notEmpty: true,
      isLength: {
          errorMessage: 'nit must be betwen 5 an 30 characters',
          options: { min: 5, max: 30 },
      },
  },
  name: {
      in: ['body'],
      notEmpty: true,
      isLength:{
          erroMessage: `Name must be at least 5 characters`,
          options: {min:5},
      }
  },
  birthday:{
      in: [`body`],
      notEmpty: false,
  },
  email: {
      in: [`body`],
      notEmpty: true,
  },
  phoneNumber: {
      in: [`body`],
      notEmpty: true,
  },
  password: {
    in: [`body`],
    notEmpty: true,
    isLength:{
      errorMessage: `Password must be at least 8 characters`,
      options: {min:8, max:64}
    }
  }
}

const compareDataRules = {
    id: {
        in: ['body'],
        isNumeric:true,
        notEmpty: true,
        isLength: {
            errorMessage: 'nit must be betwen 5 an 30 characters',
            options: { min: 5, max: 30 },
        },
    },
    name: {
        in: ['body'],
        notEmpty: true,
        isLength:{
            erroMessage: `Name must be at least 5 characters`,
            options: {min:5},
        }
    },
    address:{
        in: [`body`],
        notEmpty: true,
    },
    email: {
        in: [`body`],
        notEmpty: true,
    },
    phoneNumber: {
        in: [`body`],
        notEmpty: true,
    },
}
  


module.exports = {
    register: preRegisterSchema,
    userRules: userRegisterRules,
    loginRules: loginUserRules,
    resetPasswordRules: userResetpasswordRules,
    newUser: newUserRules,
    compareData: compareDataRules
  };