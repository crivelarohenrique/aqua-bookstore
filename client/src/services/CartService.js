import { api } from "./ApiService";

const apiGetItemsCart = async() => {
    try {
        const response = await api.get('/api/cart');
        return response.data;
    } catch (error) {
        throw error;
    }
}

const apiAddItemToCart = async (id) => {
    try {
        const response = await api.post(`/api/cart/add/${encodeURIComponent(id)}`, {});
        return response.data
    } catch (error) {
        throw error;
    }
};

const apiRemoveItemCart = async(id) => {
    try {
        const response = await api.delete(`/api/cart/remove/${encodeURIComponent(id)}`,)
        return response.data
    } catch(error) {
        throw error 
    }
};

export {
    apiGetItemsCart,
    apiRemoveItemCart,
    apiAddItemToCart
}