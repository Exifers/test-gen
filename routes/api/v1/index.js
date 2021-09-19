const express = require('express')
const router = express.Router()

const tigersRouter = require('./tigers')
router.use('/tigers', tigersRouter)

const usersRouter = require('./users')
router.use('/users', usersRouter)

module.exports = router
