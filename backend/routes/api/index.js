const router = module.exports = require('express').Router()

router.use('/user', require('./user'))
router.use('/shops', require('./shops'))
