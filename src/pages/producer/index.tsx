import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/atoms/Button'

interface Producer {
    id: string
    name: string
    document: string
    properties: any[]
}

export default function ProducersListPage() {
  const [producers, setProducers] = useState<Producer[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const data: any = []
      setProducers(data)
    }
    fetchData()
  }, [])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Produtores</h1>
        <Button onClick={() => navigate('/producers/new')}>Novo Produtor</Button>
      </div>

      <table className="w-full border rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Nome</th>
            <th className="p-2">Documento</th>
            <th className="p-2">Fazendas</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {producers.map((producer) => (
            <tr key={producer.id} className="border-t">
              <td className="p-2">{producer.name}</td>
              <td className="p-2">{producer.document}</td>
              <td className="p-2">{producer.properties?.length ?? 0}</td>
              <td className="p-2">
                <Button onClick={() => navigate(`/producers/${producer.id}`)}>
                  Visualizar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
