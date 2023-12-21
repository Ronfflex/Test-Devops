const { Pool } = require('pg')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use(express.json());

const pool = new Pool({
  user: 'monUtilisateur',
  host: 'database',
  database: 'maBaseDeDonnees',
  password: 'monMotDePasse',
  port: 5432,
});

app.get('/data', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM maTable');
  res.json(rows);
});

app.post('/add-random', async (req, res) => {
    const randomValue = Math.random();
    await pool.query('INSERT INTO maTable (valeur) VALUES ($1)', [randomValue]);
    res.json({ valeur: randomValue });
  });  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
