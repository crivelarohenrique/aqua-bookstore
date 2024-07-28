import styled from 'styled-components'
import { theme } from '../../styles/theme'

const SearchBarForm = styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    justify-content: center;
    margin-bottom: 15%;
  }

  @media (min-width: 1280px) {
  margin: 0;
  }
`

const SbTitle = styled.h2`
  margin-bottom: 1%;
  font-size: 1em;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`

const SbInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 60%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 60%;
  }
    
  @media (min-width: 1280px) {
    width: 40%;
  }
`

const SbInput = styled.input`
  width: 100%;
  height: 2em;
  background: ${theme.colors.softBackground};
  font-size: 0.8em;
  padding: 1em;
  &:focus {
  outline: 0.1em solid ${theme.colors.darkBlueBackground};
  }

  @media (min-width: 1280px) {
    font-size: 1em;
  }
`

const SbButton = styled.button`
  display: flex;
  position: absolute;
  border-radius: 1em 1em;
  right: 0;
  width: 16%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const SbImage = styled.img`
  width: 2.2em;
  height: 2em;

   @media (max-width: 767px) {
    width: 1.8em;
    height: 1.5em;
  }

   @media (min-width: 768px) and (max-width: 1279px) {
    width: 2em;
  }
`

export {
    SearchBarForm,
    SbTitle,
    SbInputWrapper,
    SbInput,
    SbButton,
    SbImage
}