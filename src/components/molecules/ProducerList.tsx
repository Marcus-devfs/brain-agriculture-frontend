import React from 'react'
import styled from 'styled-components'
import Typography from '../atoms/Typography'
import Button from '../atoms/Button'
import { useProducerContext } from '../../context/ProducerContext'

const ListWrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
`

const ProducerItem = styled.div`
  background-color: #fff;
  padding: 1rem 1.5rem;
  margin-bottom: 0.8rem;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

interface ProducerListProps {
  onEdit: (id: string) => void
}

const ProducerList: React.FC<ProducerListProps> = ({ onEdit }) => {
  const { producers, deleteProducer } = useProducerContext()

  return (
    <ListWrapper>
      <Typography variant="h5" mb={1}>
        Produtores Cadastrados
      </Typography>
      {producers.length === 0 ? (
        <Typography variant="body">Nenhum produtor cadastrado.</Typography>
      ) : (
        producers.map(p => (
          <ProducerItem key={p.id}>
            <Info>
              <Typography variant="body">
                <strong>Nome:</strong> {p.nome}
              </Typography>
              <Typography variant="body">
                <strong>CPF/CNPJ:</strong> {p.cpfCnpj}
              </Typography>
            </Info>
            <ButtonsWrapper>
              <Button onClick={() => onEdit(p.id)}>Editar</Button>
              <Button onClick={() => deleteProducer(p.id)}>Excluir</Button>
            </ButtonsWrapper>
          </ProducerItem>
        ))
      )}
    </ListWrapper>
  )
}

export default ProducerList
