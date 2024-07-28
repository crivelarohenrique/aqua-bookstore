import React from 'react';
import { CartUl } from "./StyledCartList";
import CartItem from '../CartItem';

const CartList = ({ items, onRemove }) => {
  return (
    <CartUl>
      {items.map(item => (
        item !== null && (
          <CartItem 
            key={item._id} 
            item={item} 
            onRemove={onRemove} 
          />
        )
      ))}
    </CartUl>
  );
};

export default CartList;
