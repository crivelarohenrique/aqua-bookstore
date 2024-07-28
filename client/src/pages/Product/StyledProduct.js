import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const ProductContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
`

const ProductSection = styled.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    gap: 8em;
    animation: ${fadeIn} 0.5s ease-in-out;

    @media (max-width: 767px) {
    gap: 2em;
    flex-direction: column;
    align-items: center;
    }

    @media (min-width: 767px) and (max-width: 1279px) {
    gap: 2em;
    flex-direction: column;
    align-items: center;
    }

    @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    }
`

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

const ProductImage = styled.img`
    margin-bottom: 5%;   

    @media (max-width: 767px) {
    height: 12em;
    width: 8em;
    margin-left: 0;
    }

    @media (min-width: 767px) and (max-width: 1279px) {
    height: 20em;
    width: 12em;
    margin-left: 0;
    }

    @media (min-width: 1280px) {
    height: 25em;
    width: 15em;
    }
`

const ProductPrice = styled.h1`
    font-size: 1.2em;
    text-align: center;
`

const ProductWrapperDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3%;
    text-align: center;
 
    @media (max-width: 767px) {
    width: 80%;
    }

    @media (min-width: 767px) and (max-width: 1279px) {
    width: 80%;
    }

    @media (min-width: 1280px) {
    width: 60%;
    }
`

const ProductTitle = styled.h1`
    font-size: 2em;

    @media (max-width: 767px) {
    font-size: 1em;
    }
`

const ProductAuthor = styled.h2`
    font-size: 1.2em;
     @media (max-width: 767px) {
    font-size: 0.9em;
    }
`

const ProductSynopsis = styled.p`
    font-size: 1.1em;
    max-width: 100%;
    text-align: start;
    margin-top: 7%;

    @media (max-width: 767px) {
    font-size: 0.6em;
    margin-bottom: 15%;
    }
`

const ProductWrapperButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 10%;

    @media (max-width: 767px) {
    justify-content: center;
    margin-top: 5%;
    }

    @media (min-width: 767px) and (max-width: 1279px) {
    justify-content: center;
    margin-top: 5%;
    }
`

export {
    ProductContainer,
    ProductSection,
    ProductWrapper,
    ProductImage,
    ProductPrice,
    ProductWrapperDetails,
    ProductTitle,
    ProductAuthor,
    ProductSynopsis,
    ProductWrapperButton
}