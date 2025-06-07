// molecules/ProducerCard.tsx
import { Card, CardTitle, CardText, Badge } from '../atoms/Card'

type Producer = {
  id: string
  nome: string
  cpfCnpj: string
  propriedadesCount: number
}

interface ProducerCardProps {
  producer: Producer
}

const ProducerCard = ({ producer }: ProducerCardProps) => {
  return (
    <Card>
      <CardTitle>{producer.nome}</CardTitle>
      <CardText>CPF/CNPJ: {producer.cpfCnpj}</CardText>
      <Badge variant="primary">{producer.propriedadesCount} propriedades</Badge>
    </Card>
  )
}

export default ProducerCard
