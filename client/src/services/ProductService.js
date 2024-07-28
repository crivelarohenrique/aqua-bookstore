import { api } from './ApiService';

const apiGetProducts = async() => {
    const response = await api.get('/api/products');
    return response.data;
}

const apiGetProductByTitle = async(slug) => {
    try {
        const response = await api.get(`/api/products/${slug}`);
        return response.data[0];
    } catch (error) {
        throw error;
    }
}

const apiGetProductByTitleInput = async(title) => {
    try {
        const response = await api.post(`/api/products/productInput`, { title });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    apiGetProducts,
    apiGetProductByTitle,
    apiGetProductByTitleInput
}
