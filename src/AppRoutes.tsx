import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/templates/MainLayout'
import DashboardPage from './pages/dashboard'
import ProducersListPage from './pages/producer'
import ProducerDetailsPage from './pages/producer/[id]'

const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/producers" element={<ProducersListPage />} />
      <Route path="/add-producer/:id" element={<ProducerDetailsPage />} />
    </Routes>
  </MainLayout>
)

export default AppRoutes
