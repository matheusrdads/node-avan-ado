const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const { buscaEstado, buscaPais } = require('./src/functions/buscaEstado')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.set('views', './src/views')

app.get('/', (req, res) => {

  res.render('index')
})

app.post('/envia-estado', async (req, res) => {

  const { estado } = req.body
  const resultado = await buscaEstado(estado)
  res.render('resultado', { dado: resultado })
})

app.post('/envia-pais', async (req, res) => {

  const { pais } = req.body
  const resultado2 = await buscaPais(pais)
  res.render('resultado2', { dado2: resultado2 })
})

app.listen(4444, () => { console.log("Servidor rodando na 4444"); })