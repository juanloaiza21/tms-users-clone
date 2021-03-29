const { check } = require("express-validator");

const userRegisterRules = () => {
    return [
        check("email").isEmail(),
        check("nit").isInt(),
        check("name").isString(),
        check("direccion").isString(),
        check("password").isLength({ min: 6 }),
        check("phoneNumber").isMobilePhone(),
      ];
};

module.exports = {
    userRules: userRegisterRules,
}