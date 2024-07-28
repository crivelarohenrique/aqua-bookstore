const errorMessages = require('../config/errorMessage');
const Shelf = require('../models/Shelf');
const User = require('../models/User');
const { getAllCartByUserService, clearCartService } = require('./CartService');

const getShelfItems = async(userId) => {
    try {
        const shelf = await Shelf.findOne({ user: userId }).populate('items.product');
        return shelf ? shelf.items : [];
    } catch (error) {
        return { error: errorMessages.genericError };
    }
};


const addToShelf = async (userId) => {
    try {
        const cartItems = await getAllCartByUserService(userId);
        const user = await User.findById(userId);

        if (!user) {
            return { error: 'Usuário não encontrado' };
        }

        let shelf = await Shelf.findOne({ user: userId });
        if (!shelf) {
            shelf = new Shelf({ user: userId, items: [] });
        }

        const newCartItems = cartItems.filter(cartItem => !shelf.items.some(shelfItem => shelfItem.product.toString() === cartItem._id.toString()));

        for (const cartItem of newCartItems) {
            if (user.balance < cartItem.price) {
                return { error: 'Saldo insuficiente' };
            }
            user.balance -= cartItem.price;
            shelf.items.push({ product: cartItem._id });
        }

        await shelf.save();
        await user.save();

        await clearCartService(userId);

        return shelf;
    } catch (error) {
        return { error: errorMessages.genericError };
    }
};

module.exports = { getShelfItems, addToShelf}