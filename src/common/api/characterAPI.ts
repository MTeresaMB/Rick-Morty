import axios, { AxiosError } from 'axios'
import type { CharacterListEntity, EndPoint } from './charactersAPI.interfaces'

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const getCharacterList = async (page?: number): Promise<EndPoint> => {
  try {
    const url = page !== undefined ? `${BASE_URL}/?page=${page}` : BASE_URL
    const { data } = await axios.get<EndPoint>(url)
    const endPoint: EndPoint = {
      results: data.results,
      info: data.info
    }
    return endPoint
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response !== undefined) {
        console.log('Error in server response: ', error.response.data)
        console.log('Status code: ', error.response.status)
      } else if (error.request !== undefined) {
        console.log('No response received from server: ', error.request)
      } else {
        console.log('Error setting up the request: ', error.message)
      }
    } else {
      console.log('Unknown error occurred: ', error)
    }
    throw error
  }
}

export const getCharacter = async (id: number): Promise<CharacterListEntity> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log('Error fetching character: ', error)
    throw error
  }
}
