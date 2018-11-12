const jwt = require("jwt-simple");

module.exports.tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  console.log(user.id, 'this is from the token')
  return jwt.encode({ userId: user.id, iat: timestamp }, process.env.SECRET);
}

module.exports.decodeJWT = (token) => {
  const authUser = jwt.decode(token, process.env.SECRET)
  return authUser
}

module.exports.isAuth = (req, res, next)=>{
  return req.headers.authorization
  ? next()
  : res.redirect('/')
}