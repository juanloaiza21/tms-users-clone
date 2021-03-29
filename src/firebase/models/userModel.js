function userRegistermodel(data) {
    let user = {
      data: {
        emailVerified: false,
        phoneNumber: `+${data.phoneNumber}`,
        password: data.password,
        displayName: `${data.name}`,
        photoURL: data.photoURL,
        disabled: false,
        email: data.email,
      },
      otherInfo: {
        direccion: data.direccion,
        nit: data.nit,
      },
    };
    return user;
  }
  
  module.exports = {
    register: userRegistermodel
  };