const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 9000;
const products = require('./data/Products'); // Ensure correct path
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGOOSEDB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error: ", err));

// Middleware for JSON parsing
app.use(express.json());

// Database Seeder
const databaseSeeder = require('./databaseSeeder');
app.use('/api/seed', databaseSeeder);

// Match Password
const userRoute = require('./routes/User');
app.use('/api/users', userRoute);

// App Test Routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
