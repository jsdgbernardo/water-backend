const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

let latestWeight = 0; // Initialize variable

app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Parse JSON body

// POST route from ESP32
app.post('/api/data', (req, res) => {
  const { weight } = req.body;
  console.log('Received weight:', weight);
  latestWeight = weight;
  res.send('Data received');
});

// GET route for frontend
app.get('/api/data', (req, res) => {
  console.log('GET /api/data called');
  res.json({ weight: latestWeight || 0 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
