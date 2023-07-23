import React from 'react'
import { type CharacterListEntity, getCharacterList } from '@/common/api'

interface DataAPIProps {
  characters: CharacterListEntity[]
  error: string | null
  fetchCharacterList: (page: number) => Promise<void>
}
export const useCharacterList = (): DataAPIProps => {
  const [characters, setCharacters] = React.useState<CharacterListEntity[]>([])
  const [error, setError] = React.useState<string | null>(null)

  const fetchCharacterList = async (page: number): Promise<void> => {
    try {
      const response = await getCharacterList(page)
      setCharacters(response.results)
    } catch (error) {
      setError('Error fetching character list')
    }
  }

  return { characters, error, fetchCharacterList }
}
