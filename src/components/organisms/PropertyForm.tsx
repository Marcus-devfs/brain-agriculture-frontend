// src/pages/producer/components/PropertyForm.tsx
import styled from "styled-components"
import Input from "../atoms/Input"
import Typography from "../atoms/Typography"

interface Props {
  index: number
}

const Wrapper = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`

const PropertyForm = ({ index }: Props) => {
  return (
    <Wrapper>
      <Typography variant="h5">Fazenda #{index + 1}</Typography>
      <Input placeholder="Nome da Fazenda" />
      <Input placeholder="Cidade" />
      <Input placeholder="Estado" />
      <Input placeholder="Área Total (ha)" type="number" />
      <Input placeholder="Área Agricultável (ha)" type="number" />
      <Input placeholder="Área de Vegetação (ha)" type="number" />
    </Wrapper>
  )
}

export default PropertyForm
