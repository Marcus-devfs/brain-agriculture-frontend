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


interface Producer {
  id: string
  name: string
  document: string
  properties: any[]
}

export default function ProducersListPage() {
  const [producers, setProducers] = useState<Producer[]>([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const data: Producer[] = [
        {
          id: '1',
          name: 'João da Silva',
          document: '123.456.789-00',
          properties: [{}, {}, {}],
        },
        {
          id: '2',
          name: 'Maria Oliveira',
          document: '987.654.321-00',
          properties: [{}],
        },
      ]
      setProducers(data)
    }
    fetchData()
  }, [])

  const filtered = producers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.document.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      <Header>
        <Input
          placeholder="Buscar por nome ou documento..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => navigate('/producers/new')}>Novo Produtor</Button>
      </Header>

      {filtered.length === 0 ? (
        <EmptyMessage>Nenhum produtor encontrado.</EmptyMessage>
      ) : (
        <CardsGrid>
          {filtered.map((producer) => (
            <Card key={producer.id}>
              <Typography variant="h5">{producer.name}</Typography>
              <Typography variant="body">{producer.document}</Typography>
              <Typography variant="body">
                Fazendas cadastradas: <strong>{producer.properties?.length ?? 0}</strong>
              </Typography>
              <CardFooter>
                <Button onClick={() => navigate(`/producers/${producer.id}`)}>
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
