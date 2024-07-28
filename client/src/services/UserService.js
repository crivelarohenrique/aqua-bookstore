import { api } from "./ApiService";

const apiCreateUser = async(username, password) => {
    try {
        const response = await api.post(`/api/user/register`, { username, password });
        return response.data;
    } catch (error) {
        throw error
    }
}

const apiGetUserBalance = async() => {
    try {
        const response = await api.get('/api/user/balance');
        return response.data.balance;
    } catch (error) {
        throw error   
    }
}

const apiGetUsername = async() => {
    try {
        const response = await api.get('/api/user/username')
        return response.data.username
    } catch (error) {
        throw error
    }
}

export { 
    apiGetUserBalance,
    apiGetUsername,
    apiCreateUser,
}