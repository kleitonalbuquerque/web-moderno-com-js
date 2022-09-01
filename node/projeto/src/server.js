const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Express...'))

app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()
})

app.get('/produtos', (req, res) => res.send([
  { nome: 'Notebook', preco: 2399.99 },
  { nome: 'Headset', preco: 123.45 }
]))

app.listen(port, () => console.log(`Server run on port ${port}!`))