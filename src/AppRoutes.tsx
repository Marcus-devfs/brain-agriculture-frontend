import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/templates/MainLayout'
import DashboardPage from './pages/dashboard'
import ProducersListPage from './pages/producer'
import CropListPage from './pages/crop'
import PlantedCropListPage from './pages/planted-crop'
import PropertyListPage from './pages/property'
import NewProducerPage from './pages/producer/new'

const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/producers" element={<ProducersListPage />} />
      <Route path="/producer/new" element={<NewProducerPage />} />
      <Route path="/crops" element={<CropListPage />} />
      <Route path="/planted-crops" element={<PlantedCropListPage />} />
      <Route path="/properties" element={<PropertyListPage />} />

    </Routes>
  </MainLayout>
)

export default AppRoutes
