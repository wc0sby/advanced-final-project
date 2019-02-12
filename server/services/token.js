const jwt = require("jwt-simple");

module.exports.tokenForUser = (user) => {
  const timestamp = new Date()/1000;
  const expTime = (new Date().getTime() + 60 * 60 * 1000)/1000
  console.log(user.id, 'this is from the token')
  return jwt.encode({ userId: user.id, iat: timestamp, exp: expTime}, process.env.SECRET);
}

module.exports.isAuth = (req, res, next)=>{

  const authHeader = req.headers.authorization;
  if ((authHeader === null) || (authHeader === undefined)) {
    console.log(authHeader,req.params.id)
    return res.redirect('/');
  }


try {
  const decodedAuthInfo = jwt.decode(authHeader, process.env.SECRET);
  req.userId = decodedAuthInfo.userId;
  
  next();
} catch (error) {
  return res.status(403).json({error:"Session Expired"});
}
 
  
}