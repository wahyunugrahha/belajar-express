const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Selamat datang di API express.js');
});

app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});
