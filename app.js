const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes = require('./routes/users');
const checkApiKey = require('./middleware/checkApiKey');

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method}, ${req.url}`);
  next();
});

app.use('/users', checkApiKey, userRoutes);

app.get('/', (req, res) => {
  res.send('Selamat datang di API express.js');
});

app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  console.error('Error terjadi:', err.message);
  res.status(500).json({ message: 'Terjadi kesalahan di server' });
});
