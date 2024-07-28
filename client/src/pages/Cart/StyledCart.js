import styled from "styled-components"

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
`

const CartSectionSubmit = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
    margin: 0;
    margin-bottom: 10%;
    }
`

export {
   CartContainer,
   CartSectionSubmit,
}