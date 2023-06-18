import { EndPoint, CharacterCollectionEntity } from "./character-collection.api-model";
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';
export const getCharacterCollection = async (): Promise<CharacterCollectionEntity[]> => {
  try {
    const { data } = await axios.get<EndPoint>(url);
    return data.results;
  } catch (error: any) {
    if (error.response) {
      console.log('Error in server response: ', error.response.data);
      console.log('Status code: ', error.response.status);
    } else if (error.request) {
      console.log('No response received from server: ', error.request);
    } else {
      console.log('Error setting up the request: ', error.message);
    }
    throw error;
  }
}