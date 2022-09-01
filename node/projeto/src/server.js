const express = require('express')
const app = express()
const port = 3000

const dataBase = require('./data')

app.get('/', (req, res) => res.send('Hello Express...'))

app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()
})

app.get('/produtos', (req, res) => res.send(dataBase.getProdutos()))

app.get('/produtos/:id', (req, res) => res.send(dataBase.getProduto(req.params.id)))

app.post('/produtos', (req, res, next) => {
  const produto = dataBase.salvarProdutos({
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.listen(port, () => console.log(`Server run on port ${port}!`))