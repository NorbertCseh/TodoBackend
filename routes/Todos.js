const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

router.get('/all-todos', (req, res) => {
  Todo.find()
    .sort({ createdDate: -1 })
    .then(rooms => res.status(200).json(rooms))
    .catch(err => res.status(400).json(err))
})

router.post('/create-todo', (req, res) => {
  let newTodo = new Todo({
    title: req.body.title,
    task: req.body.task
  })
  newTodo
    .save()
    .then(todo => res.status(201).json(todo))
    .catch(err => res.status(400).json(err))
})

router.get('/:todo_id', (req, res) => {
  Todo.findById(req.params.todo_id)
    .then(todo => {
      res.status(200).json(todo)
    })
    .catch(err => res.status(400).json(err))
})

router.delete('/:todo_id', (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.todo_id })
    .then(todo => res.status(200).json(todo))
    .catch(err => res.status(400).json(err))
})

router.put('/:todo_id', (req, res) => {
  Todo.findById(req.params.todo_id)
    .then(todo => {
      todo.title = req.body.title
      todo.task = req.body.task
      todo.save()
      res.status(200).json(todo)
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router
