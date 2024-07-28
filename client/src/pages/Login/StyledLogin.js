import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const LoginFormSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 2em;
`

const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1em;
    background: ${theme.colors.darkBlueBackground};
    box-shadow: 0.2em 0.4em 0.5em black;
    border-radius: 0.5em;

    @media (max-width: 767px) {
        width: 30em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        width: 40em;
        min-height: 35em;
        gap: 2em;
    }

    @media (min-width: 1280px) {
        width: 50em;
    }
`

const LoginWrapperTitle = styled.div`
    display:flex;
    width: 100%;
    height: 35%;
    align-items: center;
    margin-bottom: 2%;
`

const LoginTitleText = styled.h1`
    font-size: 1.5em;
    text-align: center;
    width: 100%;
    font-weight: 400;

    @media (min-width: 768px) and (max-width: 1279px) {
       font-size: 2.5em;
    }

     @media (min-width: 1280px) {
        font-size: 2.5em;
    }
`

const LoginSectionInput = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    gap: 1em;
`

const LoginContainerInput = styled.div`
    display: flex;
    flex-direction: column;
`

const LoginTextInput= styled.h2`
    display:flex;
    width: 100%;
    font-size: 0.8em;
    font-weight: 400;
    justify-content: start;
    margin-left: 10%; 
    margin-bottom: 2%;

    @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 1.5em;
    }

    @media (min-width: 1280px) {
        font-size: 1em;
    }
`

const LoginWrapperInput = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`

const LoginImageInput = styled.img`
    position: absolute;
    right: 14%;

    @media (max-width: 767px) {
        height: 1em;
        width: 1em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        height: 1.5em;
        width: 1.5em;
    }

    @media (min-width: 1280px) {
        height: 1.7em;
        width: 1.7em;
    }
`

const LoginFormInput = styled.input`
    font-size: 0.8em;
    font-style: italic;
    font-family: "Poppins", sans-serif;
    height: 2em;
    width: 80%;
    padding: 0.5em;

    @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 1em;
        height: 2.5em;
    }

     @media (min-width: 1280px) {
        font-size: 1.2em;
    }
`;

const LoginSubmitForm = styled.input.attrs({ type: 'submit'})`
    width: 25%;
    height: 2em;
    align-self: end;
    margin-right: 10%;
    background-color: #5b8bfb;
    border-radius: 0.5em;
    font-size: 0.8em;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: italic;
    color: ${theme.colors.textColor};
    border: none;
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 1.2em;
    }

     @media (min-width: 1280px) {
        font-size: 1.2em;
    }
`

const LoginWrapperParagraph = styled.div`
    display:flex;
    flex-direction-column;
    justify-content: center;
    align-items:center;
    height: auto;
`

const LoginParagraph = styled.p`
    font-size: 1em;
    width: 80%;
    height: auto;
    align-self: end;
    margin-top: 10%;

    @media (max-width: 767px) {
        font-size: 0.8em;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 1.5em;
    }

    @media (min-width: 1280px) {
        font-size: 1.2em;
    }
`

const LoginStyledLink = styled(Link)`
    color: ${theme.colors.linkTextColor};
    font-weight: 700;

    @media (max-width: 767px) {
        margin-left: 1%;
    }

    @media (min-width: 1280px) {
        margin-left: 1%;
    }
`


export {
    LoginFormSection,
    LoginFormContainer,
    LoginWrapperTitle,
    LoginTitleText,
    LoginSectionInput,
    LoginContainerInput,
    LoginTextInput,
    LoginWrapperInput,
    LoginImageInput,
    LoginFormInput,
    LoginSubmitForm,
    LoginWrapperParagraph,
    LoginParagraph,
    LoginStyledLink
}