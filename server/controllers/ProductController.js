const errorMessages = require('../config/errorMessage');
const ProductService = require('../services/ProductService');

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProductsService();
        res.json(products)
    } catch(error) {
        res.status(500).send({ error: errorMessages.genericError });
    }
};

const getProductByUrl = async (req, res) => {
    try {
        const { slug } = req.params
        const product = await ProductService.getProductBySlugService(slug); // Buscar o Product pelo título
        res.status(200).json(product)
    } catch(error) {
        res.status(404).json({  error: errorMessages.genericError });
    }
};

const postProductByInput = async (req, res) => {
    try {
        const { title } = req.body;
        const product = await ProductService.getProductByTitleService(title)
        res.json(product);
    } catch(error) {
        res.status(500).json({  error: errorMessages.genericError })
    }
};

module.exports = {
    getAllProducts,
    getProductByUrl,
    postProductByInput
}