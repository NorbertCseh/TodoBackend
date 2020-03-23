const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = Todo = mongoose.model('todo', TodoSchema)
