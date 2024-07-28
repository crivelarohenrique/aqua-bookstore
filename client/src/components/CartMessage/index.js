import { 
    CartEmptyMessage, 
    CartMessageWrapper,
    CartMessageLink, 
    } from "./StyledCartMessage";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function CartMessage() {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
        return null;
    }
    return authenticated && (
        <CartMessageWrapper>
            <CartEmptyMessage> 
            Seu Carrinho está vazio,
            <br/>
                <CartMessageLink to={'/'}>
                que tal comprar um livro hoje?
                </CartMessageLink>
            </CartEmptyMessage>
        </CartMessageWrapper>
        
    )
}

export default CartMessage;