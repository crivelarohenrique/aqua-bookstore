import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
/* Reset básico de estilos */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body {
        width: 100%;
        min-height: 100%;
        font-family: "Poppins", sans-serif;
        font-style: normal;
        overflow-x: hidden;
    }
    
    body {
        display: flex;
        line-height: 1.6; /* Ajusta a altura da linha para melhorar a legibilidade */
        background: ${theme.colors.backgroundApp};

    ul, ol {
        list-style: none;
    }
    
    img {
        max-width: 100%;
        display: block;
    }

    input {
        background: ${theme.colors.textColor};
    }

    h1 {
        color: ${theme.colors.textColor};
    }

    h2 {
        color: ${theme.colors.textColor};
    }

    P {
        color: ${theme.colors.textColor};
    }
    
    a {
        text-decoration: none;
        list-style: none;
        color: inherit;
    }
    
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`

const Main = styled.div`
    min-height: 100vh;
    width: 100vw;
`

export {
    GlobalStyle,
    Main
}