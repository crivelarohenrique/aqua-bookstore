import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartMessageWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const CartMessageLink = styled(Link)`
    font-size: 1em;
    height: 20%;
    color: #5b8bfb;
    margin: 0 0% 0 0.2%;
    white-space: wrap;
`
const CartEmptyMessage = styled.h1`
    font-size: 2em;
    height: 20%;
    width: 100%;
    text-align: center;
`

export {
    CartMessageWrapper,
    CartMessageLink,
    CartEmptyMessage
}