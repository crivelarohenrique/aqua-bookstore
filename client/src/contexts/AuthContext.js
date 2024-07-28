import React, { createContext, useState, useEffect } from 'react';
import { api } from '../services/ApiService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuthentication = async () => {
            try {
                const response = await api.get('/api/user/auth')
                const isAuth = response.data
                console.log(isAuth)
                setAuthenticated(isAuth)
            } catch (error) {
                setAuthenticated(false)
            } finally {
                setLoading(false);
            }
        };

        fetchAuthentication();
    }, [authenticated]);

    const login = async ({ username, password }) => {
        setLoading(true);
        try {
            const response = await api.post('/api/user/login', { username, password });
            console.log(response)
            setAuthenticated(response.data.authenticated);
        } catch (error) {
            setAuthenticated(false);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await api.post('/api/user/logout');
            setAuthenticated(false);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ authenticated, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
