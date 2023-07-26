import { useState } from 'react'
import axios from 'axios'
import { type EndPoint, type CharacterListEntity } from './characterList.interface'
import { BASE_URL } from '@/common/common.const'

interface useCharacterProps {
  charactersFullList: CharacterListEntity[]
  charactersFullListPages: number
  error: boolean
  fetchCharacterList: (page: number) => Promise<void>
}

export const useCharacterList = (): useCharacterProps => {
  const [apiResponse, setApiResponse] = useState<EndPoint>({
    info: { count: 0, pages: 0, next: '', prev: null },
    results: [],
  })
  const {
    info: { pages: charactersFullListPages },
    results: charactersFullList,
  } = apiResponse
  const [error, setError] = useState<boolean>(false)

  const fetchCharacterList = async (page: number): Promise<void> => {
    try {
      const { data } = await axios.get(`${BASE_URL}/?page=${page}`)
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
    charactersFullList,
    charactersFullListPages,
    error,
    fetchCharacterList,
  }
}
