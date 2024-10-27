const connectToMongo = require('./db');
const cors = require('cors'); // Import CORS

connectToMongo();
const express = require('express');
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors()); // Use CORS middleware

app.use(express.json()); // Middleware to parse JSON bodies

// Available Routes
app.use('/api/auth', require('./routes/auth'));

// Example root route (optional)
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`);
});
