const mongoose = require('mongoose')

const shelfSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
            {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        addedAt: {
            type: Date,
            default: Date.now
            }
        }
    ]
});

const Shelf = mongoose.model('Shelf', shelfSchema);

module.exports = Shelf;