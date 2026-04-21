const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Node practice server is running.');
});

app.get('/about', (req, res) => {
  res.json({
    project: 'Practicing Node',
    purpose: 'Small route practice for daily commits'
  });
});

app.get('/api/tips', (req, res) => {
  res.json([
    'Use route params for dynamic values',
    'Use query strings for filtering',
    'Use JSON responses for APIs'
  ]);
});

app.get('/api/user/:id', (req, res) => {
  res.json({
    userId: req.params.id,
    note: 'Route param example'
  });
});

app.post('/api/echo', (req, res) => {
  res.status(201).json({
    message: 'Data received',
    body: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
