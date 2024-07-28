const express = require('express')
const router = express.Router();
const CartController = require('../controllers/CartController');
const { authenticateToken } = require('../middlewares/verifyToken');

router.get('/', authenticateToken, CartController.getAllCart);
router.post('/add/:id', authenticateToken, CartController.addItemToCart)
router.delete('/remove/:id', authenticateToken, CartController.deleteItemCart)

module.exports = router;