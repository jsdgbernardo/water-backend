const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // allow frontend calls
app.use(express.json());

let latestData = null;

app.post('/api/data', (req, res) => {
  latestData = req.body;
  console.log('Received:', latestData);
  res.status(200).send('Data received');
});

app.get('/api/data', (req, res) => {
  res.json(latestData || { message: "No data yet" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
