import styled from "styled-components";

const CartUl = styled.ul`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100vw;
    margin: 2% 0 5% 0;
    justify-content: start;
    flex-wrap: wrap;
    gap: 2em;
    padding: 0 10em;
    margin-top: 10%;


    @media (max-width: 1279px) {
        padding: 0 1em;
        justify-content: center;
        margin: 10% 0;
        margin-top: 25%;
    }
`

export {
    CartUl
}