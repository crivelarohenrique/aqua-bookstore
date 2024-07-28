const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        username: { type: mongoose.Schema.Types.String, ref: 'User'},
        items: [{
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        }],
        createdAt: { type: Date, default: Date.now} 
});

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart;