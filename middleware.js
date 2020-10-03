const jwt = require("jsonwebtoken");
const { ReE } = require("./tools/helpers.tools");

let userOne = (req, res, next) => {
  let headers = req.headers;
  if (headers.user == 1) return next();

  res.statusCode = 403;
  return res.json("Not Athurized");
};

let notFound = (req, res, next) => {
  res.statusCode = 404;
  return res.json("404 not found");
};

let auth = (req, res, next) => {
  // get token from req headers
  const token = req.headers.token;
  if (!token) return ReE(res, "Token is missing");
  // verify the token with the key
  try {
    const payload = jwt.verify(token, "shhhhh");
    // if ok -> next()
    next();
  } catch (error) {
    // if not return error
    return ReE(res, "Token is not valid");
  }
};

module.exports.userOne = userOne;
module.exports.notFound = notFound;
module.exports.auth = auth;
