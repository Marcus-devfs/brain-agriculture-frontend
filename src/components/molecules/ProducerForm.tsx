import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Typography from '../atoms/Typography'
import { v4 as uuidv4 } from 'uuid'
import { useProducerContext } from '../../context/ProducerContext'

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

interface ProducerFormProps {
  editingId?: string | null
  onClose?: () => void
}

const ProducerForm: React.FC<ProducerFormProps> = ({ editingId, onClose }) => {
  const { addProducer, producers, editProducer } = useProducerContext()

  const [nome, setNome] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')

  useEffect(() => {
    if (editingId) {
      const p = producers.find(p => p.id === editingId)
      if (p) {
        setNome(p.nome)
        setCpfCnpj(p.cpfCnpj)
      }
    } else {
      setNome('')
      setCpfCnpj('')
    }
  }, [editingId, producers])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome || !cpfCnpj) {
      alert('Preencha todos os campos')
      return
    }

    if (editingId) {
      editProducer({ id: editingId, nome, cpfCnpj, propriedades: [] })
      if (onClose) onClose()
    } else {
      addProducer({
        id: uuidv4(),
        nome,
        cpfCnpj,
        propriedades: [],
      })
      setNome('')
      setCpfCnpj('')
    }
  }

  return (
    <FormWrapper>
      <Typography variant="h4" mb={2}>
        {editingId ? 'Editar Produtor' : 'Cadastrar Produtor'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Nome do Produtor"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            placeholder="CPF ou CNPJ"
            value={cpfCnpj}
            onChange={e => setCpfCnpj(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">{editingId ? 'Salvar Alterações' : 'Salvar Produtor'}</Button>
          <Button type="button" onClick={onClose} style={{ marginLeft: '1rem', backgroundColor: '#888' }}>
            Cancelar
          </Button>
        
      </form>
    </FormWrapper>
  )
}

export default ProducerForm
