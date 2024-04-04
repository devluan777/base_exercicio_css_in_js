import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lato', sans-serif;

  }

  body {
    padding-bottom: 120px;
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`

export const BotaoTema = styled.button`
  border: none;
  border-radius: 12px;
  padding: 8px;
  margin-top: 38px;
  color: ${(props) => props.theme.CorTextoHero};
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
