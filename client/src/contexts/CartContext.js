// CartContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { apiRemoveItemCart, apiAddItemToCart, apiGetItemsCart } from '../services/CartService';
import { AuthContext } from './AuthContext';
import defaultSwalConfig from '../styles/swalConfig';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { authenticated } = useContext(AuthContext);

    const contextGetCartItems = async () => {
        try {
            const items = await apiGetItemsCart();
            setCartItems(items);
        } catch (error) {
            Swal.fire(defaultSwalConfig);
            setCartItems([]);
        }
    };

    const contextAddToCart = async (id) => {
        try {
            await apiAddItemToCart(id);
            contextGetCartItems();
        } catch (error) {
            Swal.fire(defaultSwalConfig);
        }
    };

    const contextRemoveFromCart = async (id) => {
        try {
            await apiRemoveItemCart(id);
            contextGetCartItems();
        } catch (error) {
            Swal.fire(defaultSwalConfig);
        }
    };

    useEffect(() => {
        if (authenticated) {
            contextGetCartItems();
        } else {
            setCartItems([]);
        }
    }, [authenticated]);

    return (
        <CartContext.Provider value={{ cartItems, contextGetCartItems, contextAddToCart, contextRemoveFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
