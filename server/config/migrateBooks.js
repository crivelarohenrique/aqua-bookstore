const fs = require('fs');
const Product = require('../models/Product.js');

module.exports = async function migrateBooks() {
  try {
    const data = fs.readFileSync('./config/books.json', 'utf8');
    const productsData = JSON.parse(data);

    for (let productData of productsData) {
      const product = new Product(productData);
      await product.save();
    }
  } catch (err) {
    console.error('Erro ao migrar dados', err);
  }
}
