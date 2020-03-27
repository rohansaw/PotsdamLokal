const mongoose = require('mongoose')
const router = module.exports = require('express').Router()
const auth = require('../../auth')

const Users = mongoose.model('Users')

// POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
  const user = req.body
  

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    })
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    })
  }

  const finalUser = new Users(user)
  finalUser.setPassword(user.password)

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }))
})
