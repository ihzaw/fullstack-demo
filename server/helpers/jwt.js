const jwt = require('jsonwebtoken')
const secretKey = process.env.KEY

const signToken = (creds) => {
  const token = jwt.sign(creds, secretKey)
  return token
}

module.exports = {
  signToken
}