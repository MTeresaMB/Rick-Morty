import React from 'react'
import axios from 'axios'
import type { CharacterListEntity, EndPoint } from '@/common/api'
import { useDebounce } from 'use-debounce'

interface CharacterSearchProps {
  filterSearch: string
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>
  page: number
  character: CharacterListEntity[]
  searchCharacter: (filter: string, page: number) => Promise<EndPoint>
  error: boolean
}

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const useCharacterSearch = (): CharacterSearchProps => {
  const [character, setCharacter] = React.useState<CharacterListEntity[]>([])
  const [filterSearch, setFilterSearch] = React.useState<string>('')
  const [page, setPage] = React.useState<number>(1)
  const [debouncedFilter] = useDebounce(filterSearch, 1500)
  const [error, setError] = React.useState<boolean>(false)

  const searchCharacter = async (filter: string, page: number): Promise<EndPoint> => {
    try {
      const { data } = await axios.get<EndPoint>(`${BASE_URL}/?page=${page}&name=${filter}`)
      setCharacter(data.results)
      setError(data.results.length === 0)
      console.log(data)
      return data
    } catch (error) {
      setError(true)
      throw error
    }
  }

  React.useEffect(() => {
    if (filterSearch !== '') {
      const fetchData = async (): Promise<void> => {
        await searchCharacter(filterSearch, page)
      }
      fetchData().catch((error) => {
        console.log('Error searching character: ', error)
      })
    }
  }, [debouncedFilter, setPage])

  return { filterSearch, setFilterSearch, character, searchCharacter, error, page }
}
