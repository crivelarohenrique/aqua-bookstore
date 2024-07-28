import styled from 'styled-components'

const ImageCartWrapper = styled.div`
  margin-left: 15%;
  margin-right: 8%;
`

const ButtonCartMessage = styled.h1`
  @media (max-width: 767px) {
  font-size: 0.8em;
  }

  @media (min-width: 767px) and (max-width: 1279px) {
  font-size: 1em;
  }

  @media (min-width: 1280px) {
  font-size: 1em;
  }
`

export {
  ImageCartWrapper,
  ButtonCartMessage,
}
