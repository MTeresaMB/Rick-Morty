import React from 'react'
import { type CharacterListEntity } from '@/common/api'
import axios from 'axios'

interface DataAPIProps {
  characters: CharacterListEntity[]
  error: string | null
  fetchCharacterList: (page: number) => Promise<void>
}

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const useCharacterList = (): DataAPIProps => {
  const [characters, setCharacters] = React.useState<CharacterListEntity[]>([])
  const [error, setError] = React.useState<string | null>(null)

  const fetchCharacterList = async (page: number): Promise<void> => {
    try {
      const response = await axios.get(`${BASE_URL}/?page=${page}`)
      setCharacters(response.data.results)
    } catch (error) {
      setError('Error fetching character list')
    }
  }

  return { characters, error, fetchCharacterList }
}
