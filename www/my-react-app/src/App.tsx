import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function switchTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle></GlobalStyle>
      <Container>
        <Sidebar switchTheme={switchTheme}></Sidebar>
        <main>
          <About></About>
          <Projects></Projects>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
