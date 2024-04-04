import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import themeOrigin from './containers/theme/origin'
import themeDark from './containers/theme/dark'

import Cabecalho from './components/Cabecalho'
import EstiloGlobal, { Container, BotaoTema } from './styles'

function App() {
  const [theme, setTheme] = useState(themeOrigin)

  const toggleTheme = () => {
    setTheme(theme === themeOrigin ? themeDark : themeOrigin)
  }

  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <BotaoTema onClick={toggleTheme}>Trocar tema</BotaoTema>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
