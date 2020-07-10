const express = require('express')
const router = express.Router()

const indexController = require('../controllers/index-controller')

// const indexController = require('../controllers/')
// router.get('/', indexController.getAllTasks)
router.get('/', indexController.getIndexPage)
router.get('/refresh', indexController.refreshInfo)
router.get('/getinfo', indexController.getInfo)
module.exports = router