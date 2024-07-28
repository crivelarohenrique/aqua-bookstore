const errorMessages = require('../config/errorMessage');
const Cart = require('../models/Cart')
const Product = require('../models/Product')

const getAllCartByUserService = async(userId) => {
    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        if (!cart) {
            return [];
        }
        const products = cart.items.map(item => item.product);
        return products;
    } catch (error) {
        return { error: errorMessages.genericError };
    }
}

const getCartByUserIdService = async(userId) => {
    return await Cart.findOne({ user: userId }).populate('items.product');    
};

const deleteItemCartService = async(userId, productId) => {
    try {
        let cart = await Cart.findOne({ user: userId})
        const product = await Product.findById(productId);
        cart.items = cart.items.filter( item => item.product.toString() !== product._id.toString());
        await cart.save();
        return cart;
    } catch (error) {
        return { error: errorMessages.genericError };
    }
    
};

const clearCartService = async(userId) => {
    try {
        let cart = await Cart.findOne({ user: userId});
        cart.items = [];
        await cart.save();
        return cart;
    } catch (error) {
        return { error: errorMessages.genericError };
    }
}

const addItemToCartService = async(userId, username, productId) => {
    try {
        let cart = await Cart.findOne({ user: userId});
        if(!cart) {
            cart = new Cart({ user: userId, username: username, items: [] });
        }

        const product = await Product.findById(productId);
        if (!product || !product._id) {
            throw new Error('Produto inválido');
        }
        
        const existingCartItem = cart.items.find(item => item.product.toString() === product._id.toString());
        if (existingCartItem) {
        }  else {   
            cart.items.push({ product: productId});
            await cart.save();
                }
        return cart;
    } catch ( error ) {
        return { error: errorMessages.genericError };
    }
};


module.exports = {
    getAllCartByUserService,
    getCartByUserIdService,
    deleteItemCartService,
    addItemToCartService,
    clearCartService
}

