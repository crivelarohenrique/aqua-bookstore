import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ShelfContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    height: auto;
    margin: 3% auto 5% auto;
    padding: 3% 0;
    box-shadow: 0 0 10em rgba(0,0,0,0.2);
`

const ShelfTitle = styled.h1`
    display: flex;
    font-size: 1.6em;
    margin-left: 5%;

    @media (max-width: 767px) {
    text-align: center;
    }
`

const ShelfEmptyMessage = styled.h1`
    display: flex;
    font-size: 1em;
    align-self: center;
    margin-top: 18%;
    flex-wrap: wrap;
    text-align: center;
    cursor: default;
    font-family: 'Roboto';
    font-weight: 600;
`

const ShelfSearchWrapper = styled.div`
    display: flex;
    margin: 1%;
`

const ShelfUl = styled.ul`
    display: flex;
    width: 80%;
    gap: 2em;
    flex-wrap: wrap;
    justify-content: start;
    margin: 10% auto;

    @media (max-width: 767px) {
        justify-content: center;
    }
`

const ShelfLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em;
    margin-bottom: 2%;
    box-shadow: 0.1em 0.1em 0.3em;
    border-radius: 1em;
    background: ${theme.colors.darkBlueBackground};

    &:hover {
        background: ${theme.colors.activeBackground};
    }

    flex-basis: calc(33.33% - 2em); 
    box-sizing: border-box;

    @media (max-width: 767px) {
        flex-basis: calc(50%);
        justify-content: center;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        flex-basis: calc(50% - 1em); 
    }

    @media (min-width: 1280px) {
        flex-basis: calc(25% - 2em); 
    }
`

const ShelfImageProduct = styled.img`
    height: 15em;
    width: 10em;

    @media (max-width: 767px) {
    height: 10em;
    width: 5em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
    height: 10em;
    width: 6em;
    }
`

const ShelfTitleProduct = styled.h1`
    font-size: 1em;
    font-family: 'Poppins';
    font-weight: 600;
    text-align: center;
    cursor: default;
`

export {
    ShelfContainer,
    ShelfTitle,
    ShelfEmptyMessage,
    ShelfSearchWrapper,
    ShelfUl,
    ShelfLi,
    ShelfImageProduct,
    ShelfTitleProduct,
}