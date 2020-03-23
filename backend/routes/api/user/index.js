const router = module.exports = require('express').Router()

router.use('/login', require('./login'))
// router.use('/logout', require('./logout'))
router.use('/current', require('./current'))
router.use('/register', require('./register'))
