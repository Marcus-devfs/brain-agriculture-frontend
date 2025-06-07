import styled from 'styled-components'
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import Typography from '../atoms/Typography'

const Container = styled.div`
  margin-top: 3rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const StatBox = styled.div`
  background-color: #f5f5f5;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const COLORS = ['#f9604b', '#5DB075', '#4B7CF9', '#FFCC00', '#B84BF9']

// Simulados para agora:
const FAZENDAS = 12
const TOTAL_HECTARES = 3400

const porEstado = [
  { name: 'SP', value: 4 },
  { name: 'MG', value: 3 },
  { name: 'PR', value: 5 },
]

const porCultura = [
  { name: 'Soja', value: 6 },
  { name: 'Milho', value: 3 },
  { name: 'Cana', value: 3 },
]

const usoSolo = [
  { name: 'Agricultável', value: 2500 },
  { name: 'Vegetação', value: 900 },
]

const DashboardIndicators = () => {
  return (
    <Container>
      <Grid>
        <StatBox>
          <Typography variant="h4">{FAZENDAS}</Typography>
          <Typography variant="body">Fazendas cadastradas</Typography>
        </StatBox>

        <StatBox>
          <Typography variant="h4">{TOTAL_HECTARES} ha</Typography>
          <Typography variant="body">Total de hectares</Typography>
        </StatBox>
      </Grid>

      <Grid>
        <StatBox>
          <Typography variant="h5" mb={2}>Distribuição por Estado</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={porEstado}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {porEstado.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </StatBox>

        <StatBox>
          <Typography variant="h5" mb={2}>Por Cultura Plantada</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={porCultura}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {porCultura.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </StatBox>

        <StatBox>
          <Typography variant="h5" mb={2}>Uso do Solo</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={usoSolo}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {usoSolo.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </StatBox>
      </Grid>
    </Container>
  )
}

export default DashboardIndicators
