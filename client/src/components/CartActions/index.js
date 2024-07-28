import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { apiAddShelfItem, apiGetShelfItems } from "../../services/ShelfService";
import CartSummary from '../CartSummary';
import { CartContext } from '../../contexts/CartContext';

const CartActions = ({ validItems, addedItems, setAddedItems, balance, totalPrice }) => {
  const [isAddingToShelf, setIsAddingToShelf] = useState(false);
  const navigate = useNavigate();
  const { contextGetCartItems } = useContext(CartContext)

  const handleAddToShelf = async () => {
    if (isAddingToShelf) return;
    setIsAddingToShelf(true);

    try {
      const shelfItems = await apiGetShelfItems();
      const shelfItemIds = new Set(shelfItems.map(item => item._id));
      const { value: confirm } = await Swal.fire({
        title: 'Confirmar compra?',
        text: 'Tem certeza que deseja realizar a compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'blue',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, adicionar!',
        cancelButtonText: 'Cancelar',
        background: 'black',
        color: 'white',
      });
      
      if (confirm) {
        for (const item of validItems) {
          if (!shelfItemIds.has(item._id) && !addedItems.has(item._id)) {
            await apiAddShelfItem(item._id);
            await contextGetCartItems()
            setAddedItems(prevAddedItems => new Set(prevAddedItems).add(item._id));
          }
        }

        Swal.fire({
          title: 'Comprado',
          text: 'Os itens foram comprados e adicionados a estante!',
          icon: 'success',
          background: 'black',
          color: 'white',
          confirmButtonColor: 'blue',
        });

        navigate('/estante');
      } else {
        Swal.fire({
          title: 'Cancelado',
          text: 'Nenhum item foi adicionado à estante.', 
          icon: 'info',
          background: 'black',
          color: 'white',
          confirmButtonColor: 'blue',
        });
      }
    } catch (error) {
      Swal.fire('Erro', 'Houve um problema ao adicionar os itens à estante.', 'error');
    } finally {
      setIsAddingToShelf(false);
    }
  };

  return (
    <CartSummary 
      balance={balance} 
      totalPrice={totalPrice} 
      onBuy={handleAddToShelf} 
    />
  );
};

export default CartActions;
