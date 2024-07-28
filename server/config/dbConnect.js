const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

function handleError(error) {
  console.error('Database connection error:', error.message);
}

async function connectDB() {
  await mongoose.connect(uri).catch(error => handleError(error));
}

module.exports = connectDB;
