const mongoose = require('mongoose')
const router = module.exports = require('express').Router()
const auth = require('../../auth')

const Users = mongoose.model('Users')

// GET current route (required, only authenticated users have access)
router.get('/', auth.required, (req, res, next) => {
  const { payload: { id } } = req

  return Users.findById(id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(400)
      }

      return res.json({ user: user.toAuthJSON() })
    })
})
