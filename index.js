

console.log("Muita emoção....meu servidor....");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Oi gente')
})

app.get('/qualSeuNome', (req, res) => {
  res.send('Me chamo um servidor teste')
})

app.get('/usuarios/:id', (req, res) => {
  let id = req.params.id;
  res.send('lista de usuários...'+id)
})

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})