import { Autocomplete, TextField, Chip } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllCrops, createCrop } from '../../services/cropService'

interface Crop {
  id: string
  name: string
}

export default function CropSelector({ value, onChange }: {
  value: Crop[]
  onChange: (crops: Crop[]) => void
}) {
  const [allCrops, setAllCrops] = useState<Crop[]>([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    getAllCrops().then(setAllCrops)
  }, [])

  const handleChange = async (_: any, newValue: Crop[] | string[]) => {
    const updated: Crop[] = []

    for (const val of newValue) {
      if (typeof val === 'string') {
        // Valor digitado manualmente (novo)
        const exists = allCrops.find(c => c.name.toLowerCase() === val.toLowerCase())
        if (exists) {
          updated.push(exists)
        } else {
          const created = await createCrop(val)
          setAllCrops(prev => [...prev, created])
          updated.push(created)
        }
      } else {
        // Valor já existente
        updated.push(val)
      }
    }

    onChange(updated)
  }

  return (
    <Autocomplete
      multiple
      freeSolo
      value={value}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      onChange={handleChange}
      options={allCrops}
      getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.name}
            {...getTagProps({ index })}
            key={option.id || option.name}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} label="Culturas" placeholder="Digite ou selecione culturas" />
      )}
    />
  )
}
