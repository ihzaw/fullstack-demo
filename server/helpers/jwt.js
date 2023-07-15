const jwt = require('jsonwebtoken')
const secretKey = process.env.KEY

const signToken = (creds) => {
  const token = jwt.sign(creds, secretKey)
  return token
}

const checkToken = (token) => {
  const user = jwt.verify(token, secretKey)
  return user
}

module.exports = {
  signToken,
  checkToken
}