import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    NavbarContainer,
    NWrapper,
    NCountItemCart,
    NLink,
    NTextWrapper,
    NWrapperCount,
    NMenuWrapper,
} from './StyledNavbar';
import { GiBookshelf } from "react-icons/gi";
import { FaUser, FaHome, FaPen } from "react-icons/fa";
import { IoCart, IoExit } from "react-icons/io5";
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import { theme } from '../../styles/theme';
import Swal from 'sweetalert2';
import defaultSwalConfig from '../../styles/swalConfig';

function Navbar() {
    const location = useLocation();
    const { authenticated, loading, logout } = useContext(AuthContext);
    const { cartItems } = useContext(CartContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    let options = authenticated ? ['Início', 'Estante', `Carrinho`, 'Deslogar'] : ['Início', 'Entrar', 'Cadastrar'];
    let url = authenticated ? ['', 'estante', 'carrinho', ''] : ['', 'entrar', 'cadastre-se'];
    let icons = authenticated ? [FaHome, GiBookshelf, IoCart, IoExit] : [FaHome, FaUser, FaPen];

    const handleLogout = async (event) => {
        try {
            await logout();
            window.location.reload();
        } catch(error) {
            Swal.fire(defaultSwalConfig);
        }
    };

    return (
        <NavbarContainer authenticated={authenticated}>
            <NWrapper>
                {icons.map((IconComponent, index) => ( 
                <NMenuWrapper key={index}>
                    <Link to={url[index]} onClick={index === 3 && authenticated ? handleLogout : undefined}>
                        <IconComponent size='1.8em' color={theme.colors.iconColors} />
                    </Link>
                    <NTextWrapper key={index}>
                        <NLink
                            to={url[index]} onClick={index === 3 && authenticated ? handleLogout : undefined}
                            isActive={location.pathname === `/${url[index]}` && index !== 3}
                            >
                        {index === 2 && authenticated ? (
                        <NWrapperCount>
                            <span>{options[index]}</span>
                            <NCountItemCart>{cartItems.length}</NCountItemCart>
                        </NWrapperCount>
                                ) : (
                                    <span>{options[index]}</span>
                                )}
                            </NLink>
                        </NTextWrapper>
                    
                </NMenuWrapper>
                ))}
            </NWrapper>
        </NavbarContainer>
    );
}

export default Navbar;