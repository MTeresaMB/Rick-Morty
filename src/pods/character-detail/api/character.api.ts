import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: number): Promise<Character> => {
	const url = `https://rickandmortyapi.com/api/character/${id}`;
	try {
		const { data } = await axios.get(url);
		return data
	
	} catch (error) {
		console.log('Error fetching character: ', error);
		throw error;
	}
};
