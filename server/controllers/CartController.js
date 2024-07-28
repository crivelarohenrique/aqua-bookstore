const errorMessages = require('../config/errorMessage');
const CartService = require('../services/CartService');

const getCart = async (req, res) => {
    const userId = req.user._id;
    try {
        const cart = await CartService.getCartByUserIdService(userId);
        res.status(200).send(cart);
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError })
    }
};

const getAllCart = async (req, res) => {
    const userId = req.user._id;
    try {
        const cart = await CartService.getAllCartByUserService(userId);
        res.status(200).send(cart);
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError })
    }
};

const addItemToCart = async (req, res) => {
    const productId = req.params.id;
    const userId = req.user._id;
    const username = req.user.username;
    try {
        const cart = await CartService.addItemToCartService(userId, username, productId)
        res.status(200).send(cart);
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError })
    }
};


const deleteItemCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const productId= req.params.id
        const cart = await CartService.deleteItemCartService(userId, productId);
        res.status(200).send({ message: 'Item do carrinho deletado com sucesso!', cart})
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError })
    }
}

module.exports = {
    addItemToCart,
    deleteItemCart,
    getAllCart,
    getCart
}