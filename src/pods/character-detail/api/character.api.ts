import axios from 'axios';
import { CharacterEntity} from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterEntity> => {
	const url = `https://rickandmorty.com/api/character/${id}`;

	try {
		const { data } = await axios.get(url)
		return data;
	} catch (error) {
		console.log('Error fetching character: ', error);
		throw new Error('Error fetching character');
	}
};