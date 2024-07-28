import styled from "styled-components";

const NotFoundBooksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`

const NfbMessage = styled.h1`
    font-size: 1em;
    text-align: center;
`

const NfbImage = styled.img`
    height: 15em;
    width: 15em;
`

export {
    NotFoundBooksContainer,
    NfbMessage,
    NfbImage
}