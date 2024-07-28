const Product = require('../models/Product')

const getAllProductsService = async() => {
    const products = await Product.find();
    return products
};

const getProductBySlugService = async(slug) => {
    try {
        const product = await Product.find({ slug });
        if (!product) {
            throw new Error('Livro não encontrado');
        }
        return product;
    } catch(error) {
        return { error: errorMessages.genericError };
    }
}

const getProductByTitleService = async(title) => {
    try {
        const product = await Product.find({title: new RegExp(title, 'i')});
        if (!product) {
            throw new Error('Livro não encontrado');
        }
        return product;
    } catch(error) {
        return { error: errorMessages.genericError };
    }
}

module.exports = {
    getAllProductsService,
    getProductBySlugService,
    getProductByTitleService
};