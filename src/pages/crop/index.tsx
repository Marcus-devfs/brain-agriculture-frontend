import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/atoms/Button'

import styled from 'styled-components'
import Input from '../../components/atoms/Input'
import Typography from '../../components/atoms/Typography'

export const Container = styled.div`
  padding: 24px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`


export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`


export const CardFooter = styled.div`
  margin-top: 16px;
  text-align: right;
`

export const EmptyMessage = styled.p`
  color: #777;
`


interface Crop {
  id: string
  name: string
  plantedCrops: any[]
}

export default function CropListPage() {
  const [crops, setCrops] = useState<Crop[]>([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const data: Crop[] = [
        {
          id: '1',
          name: 'Safra 2021',
          plantedCrops: [{}, {}, {}],
        },
        {
          id: '2',
          name: 'Safra 2022',
          plantedCrops: [{}],
        },
      ]
      setCrops(data)
    }
    fetchData()
  }, [])

  const filtered = crops.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      <Header>
        <Input
          placeholder="Buscar por safra..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => navigate('/crops/new')}>Nova Safra</Button>
      </Header>

      {filtered.length === 0 ? (
        <EmptyMessage>Nenhuma Safra encontrada.</EmptyMessage>
      ) : (
        <CardsGrid>
          {filtered.map((crop) => (
            <Card key={crop.id}>
              <Typography variant="h5">{crop.name}</Typography>
              <Typography variant="body">
                Safras cadastradas: <strong>{crop.plantedCrops?.length ?? 0}</strong>
              </Typography>
              <CardFooter>
                <Button onClick={() => navigate(`/crops/${crop.id}`)}>
                  Visualizar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </CardsGrid>
      )}
    </Container>
  )
}
