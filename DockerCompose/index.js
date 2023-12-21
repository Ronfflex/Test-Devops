const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bonjour, SonarQube !');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

app.get('/add/:a/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (!isNaN(a) && !isNaN(b)) {
    const result = a + b;
    res.send(`Le résultat de ${a} + ${b} est ${result}`);
  } else {
    res.status(400).send("Entrées invalides");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose s\'est mal passé!');
});

function isValidNumber(value) {
  return !isNaN(parseInt(value));
}
