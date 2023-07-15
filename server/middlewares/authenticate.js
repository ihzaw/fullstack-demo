const { checkToken } = require("../helpers/jwt");
const { userExists } = require("../services/UserService");

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.headers)
  if (!authorization) {
    // const error = new Error({type: "UNAUTHORIZED"});
    const error = new Error("UNAUTHORIZED");
    error.code = 401
    next(error);
    return
  }
  const token = authorization.split(" ")[1];
  const decodedToken = checkToken(token);
  if (!decodedToken) {
    const error = new Error("UNAUTHORIZED");
    error.code = 401
    next(error);
    return
  }

  console.log(decodedToken);
  const user = userExists(decodedToken)
    .then((isValidUser) => {
      res.user = isValidUser;
      next();
    })
    .catch((err) => {
      console.log("error in middleware :", err);
      next(err);
    });
};

module.exports = { authenticate };
