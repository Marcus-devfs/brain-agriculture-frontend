// src/pages/producer/NewProducerPage.tsx
import styled from "styled-components"
import Typography from "../../components/atoms/Typography"
import { useState } from "react"
import Button from "../../components/atoms/Button"
import ProducerForm from "../../components/molecules/ProducerForm"
import PropertyForm from "../../components/organisms/PropertyForm"

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
`

const NewProducerPage = () => {
  const [properties, setProperties] = useState([{ id: Date.now() }])

  const addProperty = () => {
    setProperties(prev => [...prev, { id: Date.now() }])
  }

  return (
    <Container>
      <Typography variant="h2">Novo Produtor</Typography>
      <ProducerForm />

      <Typography variant="h3">Fazendas</Typography>
      {properties.map((property, index) => (
        <PropertyForm key={property.id} index={index} />
      ))}

      <Button onClick={addProperty}>Adicionar Fazenda</Button>
    </Container>
  )
}

export default NewProducerPage
