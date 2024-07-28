import styled from "styled-components";
import arrowDown from '../../assets/arrow-icon.png';
import { theme } from "../../styles/theme";

const HomeSelectContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 3%;

    @media (min-width: 1280px) {
    margin-left: 8.5%;
    justify-content: start;
    }
`

const HSMenu = styled.select`
    text-align: center;
    font-size: 1em;
    font-family: "Poppins", sans-serif;
    font-style: italic;
    font-weight: 400;
    background-color: ${theme.colors.softBackground};
    outline: 0.1em solid black;
    appearance: none;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
    background-size: 2em;
    background-position: 98% 50%;

    @media (max-width: 767px) {
    width: 40%;
    font-size: 0.8em;
    background-size: 1.7em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
    width: 40%;
    height: 2em;
    }

    @media (min-width: 1280px) {
    font-size: 1.1em;
    width: 12em;
    height: 2em;
    margin-left: 2%;
    }
`

const HSOption = styled.option`
`

export {
    HomeSelectContainer,
    HSMenu,
    HSOption
}