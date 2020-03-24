const router = module.exports = require('express').Router()
const auth = require('../../auth')

const industries = [{ value: 1, text: 'Bücher & Papetrie' }, { value: 2, text: 'Design & Geschenkartikel' }, { value: 3, text: 'Baby & Kind' }, { value: 4, text: 'Mode & Accesoirs' }, { value: 5, text: 'Möbel & Interiuer' }, { value: 6, text: 'Lebensmittel' }, { value: 7, text: 'Hobby & Freizeit' }, { value: 8, text: 'Schmuck' }, { value: 9, text: 'Parfümerie & Kosmetik' }, { value: 10, text: 'Apotheke' }]

router.get('/', auth.optional, (req, res) => {
  return res.send(industries)
})
