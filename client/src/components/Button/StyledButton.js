import styled from 'styled-components'
import { theme } from '../../styles/theme'

const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 1em;
  border-radius: 1em;
  color: ${theme.colors.textColor};
  border: none;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};
  padding: 1em;
  background: ${props => props.backgroundColor || 'black'};

  @media (max-width: 767px) {
  padding: 0.5em;
  }
`

export {
    AddButton
}