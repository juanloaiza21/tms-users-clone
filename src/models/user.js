const { check } = require("express-validator"); 

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

const userRegisterRules = () => {
  return [
      check("id").isInt(),
      check("email").isEmail(),
      check("name").isString(),
      check("address").isString(),
      check("phoneNumber").isMobilePhone(),
    ];
};

const userResetpasswordRules = () => {
  return [
      check("email").isEmail(),
    ];
};


  module.exports = {
    register: preRegisterSchema,
    userRules: userRegisterRules,
    resetPasswordRules: userResetpasswordRules,
  };