let defaultMiddleware = (req, res, next) => {
  console.log("I am a middleware");
  return next();
};

module.exports.defaultMiddleware = defaultMiddleware;
