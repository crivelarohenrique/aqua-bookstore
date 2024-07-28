import React from 'react';
import { 
  CartButtonMessage,
  CartHr,
  CartHrSubmitSection, 
  CartProductTotal, 
  CartUserBalance, 
  CartWrapperBalance, 
  CartWrapperButton, 
  CartWrapperSubmit 
} from "./StyledCartSummary";
import BuyProductSubmit from "../../components/ButtonBuyCart";

const CartSummary = ({ balance, totalPrice, onBuy }) => {
  return (
    <CartWrapperSubmit>
      <CartWrapperBalance>
        <CartUserBalance>Saldo: R${balance},00</CartUserBalance>
        <CartHrSubmitSection/>
        <CartProductTotal>Preço da compra: R${totalPrice},00</CartProductTotal>
      </CartWrapperBalance>
      <CartWrapperButton onClick={onBuy}>
        <BuyProductSubmit 
          value={<CartButtonMessage>Comprar produto</CartButtonMessage>}
        />
      </CartWrapperButton>
      <CartHr/>
    </CartWrapperSubmit>
  );
};

export default CartSummary;
