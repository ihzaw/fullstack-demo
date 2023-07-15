const errorHandler = (err, req, res, next) => {
  console.log(err)
  switch (err.code) {
    case 401:
      res.status(401).json({ code: 401, message: "Not Authorized" });
      break;
    default:
      res.status(500).json({ code: 500, message: "Internal Server Error" });
      break;
  }
};

module.exports = { errorHandler };
