import { useContext, useEffect, useState } from "react";
import { CartContainer, CartSectionSubmit } from "./StyledCart";
import { apiGetItemsCart } from "../../services/CartService";
import { apiGetUserBalance } from '../../services/UserService'
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import CartList from "../../components/CartList";
import CartActions from "../../components/CartActions";
import CartMessage from "../../components/CartMessage";
import Swal from "sweetalert2";
import defaultSwalConfig from "../../styles/swalConfig";

function Cart() {
  const [itemCart, setItemCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [balance, setBalance] = useState(false);
  const { authenticated, loading } = useContext(AuthContext);
  const [addedItems, setAddedItems] = useState(new Set());
  const { contextRemoveFromCart } = useContext(CartContext);

  const validItems = itemCart.filter(item => item !== null);
  const totalPrice = validItems.reduce((acc, item) => {
    return acc + (item && item.price ? item.price : 0);
  }, 0);

  const removeItemCartSubmit = async (id, title) => {
    try {
      const updatedItems = validItems.filter(item => item._id !== id);
      setItemCart(updatedItems);
      await contextRemoveFromCart(id);
    } catch (error) {
      Swal.fire(defaultSwalConfig);
    }
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const loadedItems = await apiGetItemsCart();
        const userBalance = await apiGetUserBalance();
        setBalance(userBalance);
        setItemCart(loadedItems);
        setCartLoaded(true);
      } catch (error) {
        Swal.fire(defaultSwalConfig);
      }
    };

    if (authenticated) {
      loadItems();
    }
  }, [authenticated]);

  if (loading || !cartLoaded) {
    return null;
  }

  if (validItems.length === 0) {
    return <CartMessage />;
  }

  return (
    authenticated && (
      <CartContainer>
        <CartSectionSubmit>
          <CartActions
            validItems={validItems} 
            addedItems={addedItems} 
            setAddedItems={setAddedItems} 
            balance={balance}
            totalPrice={totalPrice}
          />
        </CartSectionSubmit>
        <CartList items={validItems} onRemove={removeItemCartSubmit} />
      </CartContainer>
    )
  );
}

export default Cart;
