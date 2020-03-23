const app = module.exports = require('express')()
const auth = require('../auth')

const branchesList = [{ value: 1, text: 'Bücher & Papetrie' }, { value: 2, text: 'Design & Geschenkartikel' }, { value: 3, text: 'Baby & Kind' }, { value: 4, text: 'Mode & Accesoirs' }, { value: 5, text: 'Möbel & Interiuer' }, { value: 6, text: 'Lebensmittel' }, { value: 7, text: 'Hobby & Freizeit' }, { value: 8, text: 'Schmuck' }, { value: 9, text: 'Parfümerie & Kosmetik' }, { value: 10, text: 'Apotheke' }]

app.get('/', auth.optional, (req, res) => {
  const branches = branchesList.sort()
  branches.unshift({ value: null, text: 'Auswählen...' })
  return res.send(branches)
})
