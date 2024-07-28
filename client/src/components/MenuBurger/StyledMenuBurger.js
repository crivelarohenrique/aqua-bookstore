import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MenuBurgerContainer = styled.div`
  position: absolute;
  left: 2%;

  @media (min-width: 1280px) {
  display: none;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  color: ${theme.colors.iconColors};
`;

const MenuList = styled.ul`
  position: absolute;
  top: 2em;
  left: 0;
  background-color: ${theme.colors.darkBlueBackground};
  border: 1em solid ${theme.colors.darkBlueBackground};
  border-radius: 0.5em;
  list-style: none;
  margin: 0;
  z-index: 1000;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin: 0.8em 0 0 0;

  a {
    color: ${theme.colors.iconColors};
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: ${theme.colors.iconColors};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

const CloseIcon = styled.div`
  cursor: pointer;
  color: ${theme.colors.iconColors};
`;

export {
  MenuBurgerContainer,
  MenuIcon,
  MenuList,
  MenuItem,
  CloseIcon,
}