const express = require('express')
const { success } = require ('./helper.js')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello again, express !"))

app.get('/api/pokemon/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const pokemon = pokemons.find(pokemon => pokemon.id === id)
  const message = "Un pokémon a bien été trouvé."
  res.json(success(message, pokemon))
})

app.get('/api/pokemons/', (req, res) => {
  const message = 'La liste des pokémons a bien été récupérée.'
  res.json(success(message, pokemons))
})

app.listen(port, () => console.log(`Notre application node est démarée sur : http://localhost:${port}`))
