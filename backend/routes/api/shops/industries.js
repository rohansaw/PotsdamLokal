const router = module.exports = require('express').Router()
const auth = require('../../auth')

const industries = ['Bücher & Papetrie', 'Design & Geschenkartikel', 'Baby & Kind', 'Mode & Accesoirs', 'Möbel & Interiuer', 'Lebensmittel', 'Hobby & Freizeit', 'Schmuck', 'Parfümerie & Kosmetik', 'Apotheke'].map(i => ({ value: i, text: i }))

router.get('/', auth.optional, (req, res) => {
  return res.send(industries)
})
