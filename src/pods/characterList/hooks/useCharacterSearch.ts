import { BASE_URL } from '@/common/common.const'
import { useState } from 'react'
import axios from 'axios'
import type { CharacterListEntity, EndPoint } from './characterList.interface'
interface useCharacterSearchProps {
  charactersFilteredList: CharacterListEntity[]
  charactersFilteredListPages: number
  searchCharacter: (filter: string, page: number) => Promise<EndPoint>
  error: boolean
}

export const useCharacterSearch = (): useCharacterSearchProps => {
  const [apiResponse, setApiResponse] = useState<EndPoint>({
    info: { count: 0, pages: 0, next: '', prev: null },
    results: [],
  })
  const {
    info: { pages: charactersFilteredListPages },
    results: charactersFilteredList,
  } = apiResponse
  const [error, setError] = useState<boolean>(false)
  const searchCharacter = async (filter: string,page: number): Promise<EndPoint> => {
    try {
      const { data } = await axios.get<EndPoint>(
        `${BASE_URL}/?page=${page}&name=${filter}`
      )
      const { info, results } = data
      const endPoint: EndPoint = {
        info,
        results,
      }
      setApiResponse(endPoint)
      setError(false)

      return data
    } catch (error) {
      setError(true)
      throw error
    }
  }

  return {
    charactersFilteredList,
    charactersFilteredListPages,
    searchCharacter,
    error,
  }
}
