import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ProducerProvider } from './context/ProducerContext'
import { theme } from './styles/theme'
import AppRoutes from './AppRoutes'

const App = () => (
  <ThemeProvider theme={theme}>
    <ProducerProvider>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </ProducerProvider>
  </ThemeProvider>
)

export default App
