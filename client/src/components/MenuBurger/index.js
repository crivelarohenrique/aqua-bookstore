import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaPen } from 'react-icons/fa';
import { MenuBurgerContainer, MenuIcon, MenuList, MenuItem } from './StyledMenuBurger';
import { GiBookshelf } from 'react-icons/gi';
import { IoCart, IoExit } from 'react-icons/io5';
import { AuthContext } from '../../contexts/AuthContext';
import { theme } from '../../styles/theme';
import defaultSwalConfig from '../../styles/swalConfig';
import { NCountItemCart, NWrapperCount } from '../Navbar/StyledNavbar';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

const MenuBurger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { authenticated, logout } = useContext(AuthContext);
    const { cartItems } = useContext(CartContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let options = authenticated ? ['Início', 'Estante', `Carrinho`, 'Deslogar'] : ['Início', 'Login', 'Cadastrar'];
    let url = authenticated ? ['', 'estante', 'carrinho'] : ['', 'entrar', 'cadastre-se'];
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
    <MenuBurgerContainer>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes size='2em' /> : <FaBars size='2em' />}
      </MenuIcon>
      {isOpen && (
        <MenuList>
          {icons.map((IconComponent, index) => (
            <MenuItem key={index}>
            <IconComponent size='2em' color={theme.colors.iconColors} />
              <Link to={url[index]} onClick={index === 3 ? handleLogout : undefined} >{icons[index]}
              {index === 2 && authenticated ? (
                <NWrapperCount>
                  <span>{options[index]}</span>
                  <NCountItemCart>{cartItems.length}</NCountItemCart>
                </NWrapperCount>
                  ) : (
                  <span>{options[index]}</span>
                   )}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      )}
    </MenuBurgerContainer>
  );
};

export default MenuBurger;
