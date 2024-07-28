import { useState, useEffect, useCallback } from "react";
import { apiGetItemsCart } from "../services/CartService";
import { apiGetShelfItems } from "../services/ShelfService";

const useCheckItemStatus = (id, authenticated, cartItems) => {
    const [isInCart, setIsInCart] = useState(false);
    const [isInShelf, setIsInShelf] = useState(false)

    const checkItemCart = useCallback(async () => {
        try {
            const items = await apiGetItemsCart();
            const itemInCart = items.some(item => item && item._id === id);
            setIsInCart(itemInCart);
        } catch {
            return null;
        }
    }, [id]);

    const checkItemShelf = useCallback(async () => {
        try {
            const shelf = await apiGetShelfItems()
            const itemInShelf = shelf.some(item => item && item.id === id);
            setIsInShelf(itemInShelf)
        } catch {
            return null;
        }
    }, [id]);

    useEffect(() => {
        if (authenticated) {
            checkItemCart();
            checkItemShelf();
        }
    }, [id, authenticated, cartItems, checkItemCart, checkItemShelf]);

    return { isInCart, isInShelf, checkItemCart, checkItemShelf};
};

export default useCheckItemStatus;
