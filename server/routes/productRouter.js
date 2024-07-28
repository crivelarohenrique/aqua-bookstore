const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.getAllProducts);
router.get('/:slug', ProductController.getProductByUrl)
router.post('/productInput', ProductController.postProductByInput)
module.exports = router;
