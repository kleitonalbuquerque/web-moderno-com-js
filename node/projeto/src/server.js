const boddyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

const dataBase = require('./data')

app.use(boddyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello Express...'))

app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()
})

app.get('/produtos', (req, res) => res.send(dataBase.getProdutos()))

app.get('/produtos/:id', (req, res) => res.send(dataBase.getProduto(req.params.id)))

app.post('/produtos', (req, res, next) => {
  const produto = dataBase.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = dataBase.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = dataBase.excluirProduto(req.params.id)
  console.log(`Produto ${JSON.stringify(produto.nome)} excluído!`)
  res.send(produto) // JSON
})

app.delete('/produtos/', (req, res, next) => {
  console.log('Produtos excluidos!')
  const produtos = dataBase.excluirProdutos()
  res.send(produtos) // JSON
})

app.listen(port, () => console.log(`Server run on port ${port}!`))