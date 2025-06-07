import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProducerProvider } from './context/ProducerContext'
import MainLayout from './components/templates/MainLayout'
import DashboardPage from './pages/DashboardPage'
import AddProducerPage from './pages/AddProducerPage'
import ProducerListPage from './pages/ProducerListPage'
import { theme } from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <ProducerProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/add-producer" element={<AddProducerPage />} />
            <Route path="/producers" element={<ProducerListPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ProducerProvider>
  </ThemeProvider>
)

export default App
