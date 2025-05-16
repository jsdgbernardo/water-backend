const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // allow frontend calls
app.use(express.json());

let latestWeight = null;  // Store the most recent data

app.post('/api/data', (req, res) => {
  const { weight } = req.body;
  console.log('Received weight:', weight);
  latestWeight = weight;
  res.send('Data received');
});

app.get('/api/data', (req, res) => {
  res.json({ weight: latestWeight });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
