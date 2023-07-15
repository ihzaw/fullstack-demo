const express = require('express')
const app = express()
const UserController = require('./controllers/UserController')
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => UserController.login(req, res))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})