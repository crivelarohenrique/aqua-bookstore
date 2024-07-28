import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "../Button";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import useCheckItemStatus from "../../hooks/useCheckItemStatus";
import { theme } from "../../styles/theme";
import { ButtonCartMessage } from "./StyledProductAdd";

function ButtonAddProductToCart({ id, width }) {
    const { cartItems, contextAddToCart, contextRemoveFromCart } = useContext(CartContext);
    const { authenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const { isInCart, isInShelf, checkItemCart, checkItemShelf } = useCheckItemStatus(id, authenticated, cartItems);
    const handleAddToCart = async () => {
        if (authenticated) {
            if (isInCart) {
                await contextRemoveFromCart(id);
                Swal.fire({
                    icon: 'success',
                    showConfirmButton: false,
                    confirmButtonColor: 'blue',
                    text: `Item removido do carrinho!`,
                    timer: 1000,
                    background: 'black',
                    color: 'white'
                });
            } else {
                await contextAddToCart(id);
                Swal.fire({
                    icon: 'success',
                    showConfirmButton: false,
                    confirmButtonColor: 'blue',
                    text: `Item adicionado ao carrinho com sucesso!`,
                    timer: 1000,
                    background: 'black',
                    color: 'white'
                });
            }
            await checkItemShelf();
            await checkItemCart();
        } else {
            Swal.fire({
                icon: 'error',
                showConfirmButton: true,
                confirmButtonColor: 'blue',
                text: `Você precisa estar logado!`,
                background: 'black',
                color: 'white'
            });
            navigate('/entrar');
        }
    };

    return (
        <Button
            onClick={handleAddToCart}
            width={width}
            justifyContent='center'
            gap='1em'
            value={isInShelf ? <ButtonCartMessage>Produto já obtido</ButtonCartMessage> : isInCart ? <ButtonCartMessage>Remover do carrinho</ButtonCartMessage> : <ButtonCartMessage>Adicionar ao carrinho</ButtonCartMessage>}
            icon={<IoCart size='1.5em' color={theme.colors.iconColors}/>}
            disabled={isInShelf}
        />
    );
}

ButtonAddProductToCart.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.string,
};

export default ButtonAddProductToCart;
