// src/pages/producers/new.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'
import Typography from '../../components/atoms/Typography'
import { createFullProducer } from '../../services/producerService'
import CropSelector from '../../components/molecules/CropSelector'

export const Container = styled.div`
  padding: 24px;
`

export const Section = styled.div`
  margin-bottom: 24px;
  margin-top: 16px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`

export const FazendaCard = styled.div`
  background: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
`

interface Crop {
  id: number
  name: string
}

interface PlantedCrop {
  cropId: number
  cropName: string
  cropPlantedName: string
  safraId: number | null
}

interface PropertyFormState {
  name: string
  city: string
  state: string
  totalArea: number
  agriculturalArea: number
  vegetationArea: number
  plantedCrops: PlantedCrop[]
}

interface Property {
  name: string
  city: string
  state: string
  totalArea: number
  agriculturalArea: number
  vegetationArea: number
  crops: Crop[]
  plantedCrops: PlantedCrop[]
}

interface NewProducerInput {
  name: string
  cpfCnpj: string
  properties: {
    name: string
    city: string
    state: string
    totalArea: number
    agriculturalArea: number
    vegetationArea: number
    plantedCrops: {
      cropPlantedName: string
      crop: { id: number }
      safraId: number | null
    }[]
  }[]
}

export default function NewProducerPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')
  const [properties, setProperties] = useState<Property[]>([])

  const [propertyForm, setPropertyForm] = useState<PropertyFormState>({
    name: '',
    city: '',
    state: '',
    totalArea: 0,
    agriculturalArea: 0,
    vegetationArea: 0,
    plantedCrops: [],
  })

  // Para controlar quais culturas o usuário seleciona (para o selector)
  // O CropSelector deve aceitar um array de Crop e onChange com Crop[]
  // Vamos manter as culturas selecionadas sincronizadas com plantedCrops, simplificando
  // Quando selecionar culturas, vamos criar plantedCrops iniciais para elas (com cropPlantedName e safraId vazios)

  const handleCropSelectionChange = (selectedCrops: Crop[]) => {
    // Quando o usuário altera a seleção no CropSelector, atualizamos plantedCrops
    // Preservamos os dados já preenchidos (cropPlantedName e safraId) para culturas já existentes
    setPropertyForm((prev) => {
      const updatedPlantedCrops = selectedCrops.map((crop) => {
        const existing = prev.plantedCrops.find((pc) => pc.cropId === crop.id)
        return existing ?? {
          cropId: crop.id,
          cropName: crop.name,
          cropPlantedName: '',
          safraId: null,
        }
      })
      return { ...prev, plantedCrops: updatedPlantedCrops }
    })
  }

  const handleAddFazenda = () => {
    // Adiciona fazenda ao array de propriedades
    setProperties((prev) => [
      ...prev,
      {
        name: propertyForm.name,
        city: propertyForm.city,
        state: propertyForm.state,
        totalArea: propertyForm.totalArea,
        agriculturalArea: propertyForm.agriculturalArea,
        vegetationArea: propertyForm.vegetationArea,
        crops: propertyForm.plantedCrops.map((pc) => ({
          id: pc.cropId,
          name: pc.cropName,
        })),
        plantedCrops: propertyForm.plantedCrops,
      },
    ])

    // Resetar form
    setPropertyForm({
      name: '',
      city: '',
      state: '',
      totalArea: 0,
      agriculturalArea: 0,
      vegetationArea: 0,
      plantedCrops: [],
    })
  }

  const handleSubmit = async () => {
    const payload: NewProducerInput = {
      name,
      cpfCnpj,
      properties: properties.map((property) => ({
        name: property.name,
        city: property.city,
        state: property.state,
        totalArea: property.totalArea,
        agriculturalArea: property.agriculturalArea,
        vegetationArea: property.vegetationArea,
        plantedCrops: property.plantedCrops.map((pc) => ({
          cropPlantedName: pc.cropPlantedName,
          crop: { id: pc.cropId },
          safraId: pc.safraId,
        })),
      })),
    }

    try {
      const response = await createFullProducer(payload)
      console.log('Produtor criado:', response)
      navigate('/producers')
    } catch (error: any) {
      console.error('Erro ao criar produtor:', error)
      alert(error.response.data.message || 'Erro ao criar produtor')
    }
  }

  // Você precisará definir availableCrops para listar as safras (pode vir de um hook ou API)
  // Aqui só exemplo fixo:
  const availableCrops: Crop[] = [
    { id: 1, name: 'Safra 2023' },
    { id: 2, name: 'Safra 2024' },
  ]

  return (
    <Container>
      <Typography variant="h4">Novo Produtor</Typography>

      <Section>
        <Typography variant="body">Nome do Produtor</Typography>
        <Input
          placeholder="Nome do produtor"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Typography variant="body">CPF ou CNPJ</Typography>
        <Input
          placeholder="CPF ou CNPJ"
          value={cpfCnpj}
          onChange={(e) => setCpfCnpj(e.target.value)}
        />
      </Section>

      <Section>
        <Typography variant="h5">Fazendas</Typography>

        <Typography variant="body">Nome da fazenda</Typography>
        <Input
          placeholder="Nome da fazenda"
          value={propertyForm.name}
          onChange={(e) => setPropertyForm({ ...propertyForm, name: e.target.value })}
        />

        <Typography variant="body">Cidade e Estado</Typography>
        <Input
          placeholder="Cidade"
          value={propertyForm.city}
          onChange={(e) => setPropertyForm({ ...propertyForm, city: e.target.value })}
        />

        <Typography variant="body">Estado</Typography>
        <Input
          placeholder="Estado"
          value={propertyForm.state}
          onChange={(e) => setPropertyForm({ ...propertyForm, state: e.target.value })}
        />

        <Typography variant="body">Área Total (ha)</Typography>
        <Input
          placeholder="Área Total (ha)"
          type="number"
          value={propertyForm.totalArea}
          onChange={(e) => setPropertyForm({ ...propertyForm, totalArea: +e.target.value })}
        />

        <Typography variant="body">Área Agrícola (ha)</Typography>
        <Input
          placeholder="Área Agrícola (ha)"
          type="number"
          value={propertyForm.agriculturalArea}
          onChange={(e) => setPropertyForm({ ...propertyForm, agriculturalArea: +e.target.value })}
        />

        <Typography variant="body">Área de Vegetação (ha)</Typography>
        <Input
          placeholder="Área de Vegetação (ha)"
          type="number"
          value={propertyForm.vegetationArea}
          onChange={(e) => setPropertyForm({ ...propertyForm, vegetationArea: +e.target.value })}
        />

        <CropSelector
          value={propertyForm.plantedCrops.map((pc) => ({ id: pc.cropId, name: pc.cropName }))}
          onChange={handleCropSelectionChange}
        />

        {/* Inputs para editar detalhes do plantio */}
        {propertyForm.plantedCrops.map((crop, index) => (
          <div key={crop.cropId} style={{ marginTop: 12, padding: 8, border: '1px solid #ccc', borderRadius: 4 }}>
            <Typography variant="body">{crop.cropName}</Typography>

            <Input
              placeholder="Nome do Plantio (ex: Soja Safra 23/24)"
              value={crop.cropPlantedName}
              onChange={(e) => {
                const updated = [...propertyForm.plantedCrops]
                updated[index] = { ...updated[index], cropPlantedName: e.target.value }
                setPropertyForm({ ...propertyForm, plantedCrops: updated })
              }}
            />

            <select
              value={crop.safraId ?? ''}
              onChange={(e) => {
                const updated = [...propertyForm.plantedCrops]
                updated[index] = {
                  ...updated[index],
                  safraId: e.target.value ? Number(e.target.value) : null,
                }
                setPropertyForm({ ...propertyForm, plantedCrops: updated })
              }}
            >
              <option value="">Selecione a safra</option>
              {availableCrops.map((safra) => (
                <option key={safra.id} value={safra.id}>
                  {safra.name}
                </option>
              ))}
            </select>
          </div>
        ))}

        <Button onClick={handleAddFazenda} style={{ marginTop: 16 }}>
          Adicionar Fazenda
        </Button>
      </Section>

      <Section>
        {properties.map((f, index) => (
          <FazendaCard key={index}>
            <Typography>{f.name}</Typography> - {f.city}/{f.state}
            <br />
            Área total: {f.totalArea} ha - Agrícola: {f.agriculturalArea} ha - Vegetação: {f.vegetationArea} ha
            <br />
            Culturas: {f.crops.map((c) => c.name).join(', ')}
          </FazendaCard>
        ))}
      </Section>

      <Button onClick={handleSubmit}>Salvar Produtor</Button>
    </Container>
  )
}
