import api from './api'

export async function getAllCrops() {
  const response = await api.get('/crops')
  console.log(response.data)
  return response.data // array de culturas
}

export async function createCrop(name: string) {
  const response = await api.post('/crops', { name })
  return response.data // cultura criada com id
}
