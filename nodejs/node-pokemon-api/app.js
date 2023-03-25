const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello again, express !"));

app.get('/api/pokemon/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Vous avez demandé le pokemon n° ${id}`)
})

app.get('/api/pokemon/')

app.listen(port, () => console.log(`Notre application node est démarée sur : http://localhost:${port}`))
