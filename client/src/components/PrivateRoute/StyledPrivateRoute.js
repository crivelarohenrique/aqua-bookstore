import styled from 'styled-components'

const ContainerLoading = styled.div`
    display: flex;
    align-items:center;
    width: 100vw;
    height: 100vh;
`

const LoadingMessage = styled.h1`
    font-size: 3vh;
    color: gray;
    text-align: center;

`

export {
    ContainerLoading,
    LoadingMessage
}