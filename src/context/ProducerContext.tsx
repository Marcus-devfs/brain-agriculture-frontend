import { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

type Culture = {
  safra: string
  cultura: string
}

type Property = {
  id: string
  nomeFazenda: string
  cidade: string
  estado: string
  areaTotal: number
  areaAgricultavel: number
  areaVegetacao: number
  culturas: Culture[]
}

type Producer = {
  id: string
  nome: string
  cpfCnpj: string
  propriedades: Property[]
}

type ProducerContextType = {
  producers: Producer[]
  addProducer: (producer: Producer) => void
  editProducer: (updated: Producer) => void
  deleteProducer: (id: string) => void
}

const ProducerContext = createContext<ProducerContextType | undefined>(undefined)

export const ProducerProvider = ({ children }: { children: ReactNode }) => {
  const [producers, setProducers] = useState<Producer[]>([])

  const addProducer = (producer: Producer) => {
    setProducers(prev => [...prev, producer])
  }

  const editProducer = (updated: Producer) => {
    setProducers(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    )
  }

  const deleteProducer = (id: string) => {
    setProducers(prev => prev.filter(p => p.id !== id))
  }

  return (
    <ProducerContext.Provider
      value={{ producers, addProducer, editProducer, deleteProducer }}
    >
      {children}
    </ProducerContext.Provider>
  )
}

export const useProducerContext = (): ProducerContextType => {
  const context = useContext(ProducerContext)
  if (!context) {
    throw new Error('useProducerContext must be used within a ProducerProvider')
  }
  return context
}
