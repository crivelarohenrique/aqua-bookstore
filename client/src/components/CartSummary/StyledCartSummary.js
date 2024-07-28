import styled from "styled-components"
import { theme } from "../../styles/theme"

const CartHrSubmitSection = styled.hr`
    width: 100%;
    margin-bottom: 2%;
`


const CartWrapperButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #000;
    margin-top: 5%;
    cursor: pointer;
`

const CartHr = styled.hr`
    width: 100vw;
    margin-top: 5%;

    @media (max-width: 767px) {
        margin-top: 15%;
    }
`

const CartWrapperSubmit = styled.div`
    display: flex;
    width: 30em;
    height: 10em;
    flex-direction: column;
    border: 0.2em solid ${theme.colors.softBackground};
    background: ${theme.colors.darkBlueBackground};
    color: white;
    text-align: center;
    align-items: center;
    align-self: start;
    margin-top: 8%;

    @media (max-width: 767px) {
    height: 5em;
    width: 80%;
    }
`

const CartWrapperBalance = styled.div`
    display:flex;
    flex-direction: column;
    width: 30em;
    align-items: center;

    @media (max-width: 767px) {
    width: 100%;
    }
`
const CartUserBalance = styled.h1`
    display: flex;
    font-size: 1.3em;
    font-weight: 500;
    margin-left: 1%;
    padding: 1em;

    @media (max-width: 767px) {
    font-size: 0.6em;
    }
`

const CartProductTotal = styled.h1`
    display: flex;
    font-size: 1.3em;
    font-weight: 500;
    margin-left: 1%;
    padding: 1em;

    @media (max-width: 767px) {
    font-size: 0.6em;
    }
`

const CartButtonMessage = styled.h1`
    font-weight: 600;
    padding: 1em;
    
    @media (max-width: 767px) {
    font-size: 0.6em;
    }

    @media (min-width: 767px) and (max-width: 1279px) {
    font-size: 0.8em;
    }

    @media (min-width: 1280px) {
    font-size: 0.8em;
    }
    `


export {
    CartHrSubmitSection,
    CartHr,
    CartWrapperButton,
    CartProductTotal,
    CartUserBalance,
    CartWrapperBalance,
    CartWrapperSubmit,
    CartButtonMessage
}