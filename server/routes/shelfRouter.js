const express = require('express')
const router = express.Router();
const ShelfController = require('../controllers/ShelfController')
const { authenticateToken } = require('../middlewares/verifyToken')

router.get('/', authenticateToken, ShelfController.getShelfItemsController)
router.post('/buy', authenticateToken ,ShelfController.addToShelfController)

module.exports = router; 