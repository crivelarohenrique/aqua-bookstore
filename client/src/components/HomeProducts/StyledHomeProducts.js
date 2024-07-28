import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components"
import { theme } from "../../styles/theme";


const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const HomeProductsBookUl = styled.ul`
  display: flex;
  width: 80%;
  gap: 2em;
  flex-wrap: wrap;
  margin: 5% auto;
  padding: 4% 0;
  min-height: auto;
  justify-content: start;

  @media (max-width: 1279px) {
    gap: 1em;
  }
`

const HPBookLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  animation: ${fadeIn} 0.1s ease-in-out;
  background-color: ${theme.colors.darkBlueBackground};
  padding: 1em;
  border-radius: 1em;
  flex-basis: calc(33.33% - 2em); /* 3 items per row, considering the gap */
  box-sizing: border-box;

  &:hover {
    transition: ease 0.8s;
    scale: 1.1;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
    flex-basis: calc(50% - 1em); /* 2 items per row on tablets */
    }

    @media (min-width: 1280px) {
    flex-basis: calc(33.33% - 2em); /* 3 items per row on desktops */
    }
`
const HPBookLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const HPBookImage = styled.img`
  width: 10em;
  height: 15em;  
  
  @media (max-width: 1279px) {
    width: 8em;
    height: 12em; 
  }
`

const HPBookTitle = styled.h1`
  font-size: 1em;
  max-width: 100%;
  font-weight: 600;
  height: 2.5em;
  margin-bottom: 1em;
  font-weight: 500;
`

const HPBookPrice = styled.h2`
  font-size: 1em;
  font-weight: 9000;
`

const HPBookAuthor = styled.h2`
  font-size: 1em;
  font-weight: 500;
  cursor: auto:
  height: 1em;
  font-weight: 500;
  margin: 0; 
`

export {
    HomeProductsBookUl,
    HPBookLi,
    HPBookLink,
    HPBookImage,
    HPBookTitle,
    HPBookPrice,
    HPBookAuthor,
}