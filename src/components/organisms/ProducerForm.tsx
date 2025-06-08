// src/pages/producer/components/ProducerForm.tsx
import styled from "styled-components"
import Input from "../atoms/Input"
import Typography from "../atoms/Typography"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ProducerForm = () => {
    return (
        <Wrapper>
            <Typography variant="h4">Dados do Produtor</Typography>
            <div>
                <Typography variant="body">Nome</Typography>
                <Input placeholder="Ex: João da Silva" />
            </div>
            <div>
                <Typography variant="body">CPF ou CNPJ</Typography>
                <Input placeholder="000.000.000-00 ou 00.000.000/0000-00" />
            </div>
        </Wrapper>
    )
}

export default ProducerForm
