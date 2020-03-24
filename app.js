const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')

app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const todosApi = require('./routes/Todos')

app.use('/api/todos', todosApi)

mongoose
  .connect(keys.keys.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connected')
  })
  .catch(err => {
    console.log(err)
  })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
