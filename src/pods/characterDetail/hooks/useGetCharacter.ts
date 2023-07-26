import { type CharacterListEntity } from './characterDetail.interface'
import { BASE_URL } from '@/common/common.const'
import axios from 'axios'

export const useGetCharacter = async (id: number): Promise<CharacterListEntity> => {
  const url = `${BASE_URL}/${id}`
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log('Error fetching character: ', error)
    throw error
  }
}
