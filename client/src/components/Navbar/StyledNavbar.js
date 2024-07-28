import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const NavbarContainer = styled.div`
    display: flex;
`

const NWrapper = styled.div`
    display: flex;
    margin-left: 1%;
    align-items: center;
    gap: 4em;
`

const NMenuWrapper = styled.div`
    display: flex;
    gap: 0.3em;
    white-space: nowrap;
    align-items: center;

    @media (max-width: 1279px) {
    display: none;
    }

`

const NTextWrapper = styled.div`
    display: flex;
    align-items: center;
`

const NLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #d2dcfc;
  font-size: 1em;
  padding: 0 0 0 1em;
  font-weight: 500;
  text-decoration: none;

  ${({ isActive }) =>
    isActive &&
    `
    color: #5b8bfb; /* Cor do link ativo */
  `}
`;
const NWrapperCount = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

const NCountItemCart = styled.h1`
    display:flex; 
    font-size: 1em;
    border: ${theme.colors.softBackground} 0.1em solid;
    border-radius: 100%;
    min-width: 2em;
    justify-content: center;
    margin-left: 5%;

    @media (max-width: 1279px) {
    font-size: 0.8em;
    }
`

export {
    NavbarContainer,
    NWrapper,
    NMenuWrapper,
    NLink,
    NTextWrapper,
    NWrapperCount,
    NCountItemCart
}