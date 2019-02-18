const express = require('express')
const router = new express.Router()
module.exports = router

const user = require('./user')
const documents = require('./documents')
router.use('/user', user)
router.use('/documents', documents)
