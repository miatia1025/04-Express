function userCredentials(req, res, next) {
  console.log(`username: (alex)`);
  console.log(`email: (alex21@gmail.com)`);
  console.log(`password: (alex222333)`);
  console.log(`age: (19)`);
  next();
}

export default userCredentials;
