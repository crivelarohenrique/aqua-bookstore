import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3%;
`

const HomeTitle = styled.h1`
  display: flex;
  flex-direction:column;
  font-size: 2em;
  width: 100%;
  align-items;: start;
  text-align: center;
  color: #5b8bfb;
  margin-top: 3%;

  
  @media (max-width: 767px) {
    margin-top: 10%;
    font-size: 1.6em;
  }
`

const MensagemErro = styled.p`
  width: 100%;
  text-align: center;
  font-size: 3vh;
  margin-top: 2%;
`


export {
    AppContainer,
    HomeTitle,
    MensagemErro,
}