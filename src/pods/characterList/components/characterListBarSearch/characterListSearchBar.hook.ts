import React from 'react'
import axios from 'axios'
import type { CharacterListEntity } from '@/common/api'
import { useDebounce } from 'use-debounce'

interface CharacterSearchReturn {
  filterSearch: string
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>
  character: CharacterListEntity[]
  handleSearch: () => Promise<void>
  error: boolean
}

export const useCharacterSearch = (): CharacterSearchReturn => {
  const [character, setCharacter] = React.useState<CharacterListEntity[]>([])
  const [filterSearch, setFilterSearch] = React.useState<string>('')
  const [debouncedFilter] = useDebounce(filterSearch, 1500)
  const [error, setError] = React.useState<boolean>(false)

  const handleSearch = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${debouncedFilter}`
      )
      if (response.status === 200) {
        const data = response.data
        setCharacter(data.results)
        setError(data.results.length === 0)
      } else {
        throw new Error('Error fetching members')
      }
    } catch (error) {
      setError(true)
    }
  }

  React.useEffect(() => {
    if (filterSearch !== '') {
      handleSearch().catch((error) => { console.log('Error searching character: ', error) })
    }
  }, [debouncedFilter])

  return { filterSearch, setFilterSearch, character, handleSearch, error }
}
