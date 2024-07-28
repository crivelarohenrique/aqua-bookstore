import { api } from "./ApiService"

const apiGetShelfItems = async () => {
    const response = await api.get('api/shelf')
    const products = response.data.map(item => ({
        id: item.product._id,
        title: item.product.title,
        imageSrc: item.product.imageSrc,
        category: item.product.category
    }))
    return products
}

const apiAddShelfItem = async (productId ) =>  {
    try {
        const response = await api.post(`api/shelf/buy`, { productId });
        return response.data;
    } catch (error) {
        throw new Error('Erro ao adicionar produto na estante')
    }
}

export {
    apiGetShelfItems,
    apiAddShelfItem
}

