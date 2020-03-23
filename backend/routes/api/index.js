const router = module.exports = require('express').Router()

// router.use('/logout', require('./logout'))
router.use('/user', require('./user'))
router.use('/shops', require('./shops'))
// router.use('/createProject', require('./createProject'))
router.use('/branches', require('./branches'))
