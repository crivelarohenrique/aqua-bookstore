import styled from 'styled-components'
import { theme } from '../../styles/theme'

const HeaderContainer = styled.header`
    display: flex;
    width: 100vw;
    height: 4em;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.darkBlueBackground};
`

const HeaderLogoWrapper = styled.div`
    @media (min-width: 1280px) {
    position: absolute;
    left: 2%;
    }
`

export {
    HeaderContainer,
    HeaderLogoWrapper
}