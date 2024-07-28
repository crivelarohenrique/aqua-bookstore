import styled from "styled-components"
import { theme } from '../../styles/theme'

const CartLi = styled.li`
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: space-around;
    border: 0.1em solid #d2dcfc;
    align-items: center;
    text-align: center;
    padding: 1em;
    background: ${theme.colors.darkBlueBackground};

    @media (max-width: 767px) {
        flex-basis: calc(85%);
        justify-content: center;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        flex-basis: calc(50% - 1em); 
    }

    @media (min-width: 1280px) {
        flex-basis: calc(50% - 1em); 
    }
`

const CartRemoveIcon = styled.img`
    position: relative;
    left: 85%;
    bottom: 40%;
    height: 1em;
    width: 1em;
    cursor: pointer;
`

const CartImageWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50%;
    max-width: 50%;
`

const CartImageProduct = styled.img`
    display: flex;
    height: 8em;
    width: 5em;

    @media (max-width: 767px) {
        width: 4em;
        height: 6em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        width: 4em;
        height: 6em;
    }
`

const CartTitleProduct = styled.h1`
    font-size: 1em;
    font-weight: 500;

    @media (max-width: 767px) {
        font-size: 0.6em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 0.8em;
    }
`

const CartPriceProduct = styled.h2`
    font-size: 1.5em;

    @media (max-width: 767px) {
        font-size: 0.8em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 1.2em;
    }
`

export {
    CartLi,
    CartRemoveIcon,
    CartImageWraper,
    CartImageProduct,
    CartTitleProduct,
    CartPriceProduct
}