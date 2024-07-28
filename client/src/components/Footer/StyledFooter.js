import styled from 'styled-components'
import { theme } from '../../styles/theme'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 4em;
    background: ${theme.colors.darkBlueBackground};
    width: 100vw;

    @media (max-width: 767px) {
    }
`

const FIconWrapper = styled.div`
    display: flex;
    height: auto;
    justify-content: end;
    flex-direction: row;
    gap: 3vw;
    margin-right: 5%;
    width: 100%;

    @media (max-width: 767px) {
    margin-top: 2%;
    gap: 10%;
    }
`

const FIconLink = styled.a`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5%;
    &:hover {
        transition: ease 0.8s;
        scale: 1.3;
    }

    @media (max-width: 767px) {
    flex-direction: column;
    gap: 10%;
    }
`

const FIconText= styled.h1`
    font-size: 1em;

    @media (max-width: 767px) {
    font-size: 0.7em;
    display: none;
    }
    
`

const FLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 2%;
`

const FTextFooter = styled.p`
    font-size: 0.8em;
    color: #d2dcfc;
    align-self: center;

    @media (max-width: 767px) {
    font-size: 0.5em;
    }
`

export {
    FooterContainer,
    FLogoWrapper,
    FIconWrapper,  
    FIconText,
    FIconLink,
    FTextFooter
}