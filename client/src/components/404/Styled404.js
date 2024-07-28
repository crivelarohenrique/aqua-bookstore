import styled from 'styled-components'
import { theme } from '../../styles/theme'

const NotFoundContainer = styled.div`
    display: flex;  
    flex-direction: column; 
    height: 100vh;
    width: 100vw;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const NotFoundTitle = styled.h1`
    font-size: 80px;
    color: ${theme.colors.redTextColor};

    @media (max-width: 767px) {
    font-size: 30px;
    }

    @media (min-width: 767px) and (max-width: 1279px) {
    font-size: 40px;
    }
`

const NotFoundMessage = styled.p`
    font-size: 50px;
    width: 800px;
    color: ${theme.colors.redTextColor};

    @media (max-width: 767px) {
    font-size: 20px;
    width: 300px;
    }

    @media (min-width: 767px) and (max-width: 1279px) {
    font-size: 35px;
    width: 600px;
    }
`

export {
    NotFoundContainer,
    NotFoundTitle,
    NotFoundMessage
}