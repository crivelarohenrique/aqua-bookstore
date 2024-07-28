import React from 'react';
import { 
  CartLi, 
  CartRemoveIcon, 
  CartImageProduct, 
  CartTitleProduct, 
  CartPriceProduct, 
  CartImageWraper
} from "./StyledCartItem";
import RemoveIconImage from '../../assets/remove-icon.webp';

const CartItem = ({ item, onRemove }) => {
  return (
      <CartLi>
        <CartRemoveIcon 
          src={RemoveIconImage} 
          onClick={() => onRemove(item._id, item.title)} 
          alt="Remover item" 
        />
        <CartImageWraper>
          <CartImageProduct src={item.imageSrc} />
          <CartTitleProduct>{item.title}</CartTitleProduct>
        </CartImageWraper>
        <CartPriceProduct>R${item.price},00</CartPriceProduct>
      </CartLi>
  );
};

export default CartItem;
