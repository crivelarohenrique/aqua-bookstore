const express = require('express');
const router = express.Router();

const productRouter = require('./productRouter');
const userRouter = require('./userRouter.js')
const cartRouter = require('./cartRouter.js')
const shelfRouter = require('./shelfRouter');

router.use('/products', productRouter);
router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/shelf', shelfRouter)

module.exports = router;
