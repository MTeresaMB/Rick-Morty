import axios from 'axios';
import { getCharacterCollection } from './character-collection-api';
import { getCharacter} from '../../character-detail/api';

jest.mock('axios'); // Mockear axios

describe('getCharacterCollection', () => {
  test('fetches character collection from the API and renders the results', async () => {
    const mockData = {
      results: [
        { id: 1, name: 'Rick Sanchez' },
        { id: 2, name: 'Morty Smith' },
      ],
    };

    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const characterCollection = await getCharacterCollection();

    expect(characterCollection).toEqual(mockData.results);
  });

});


describe('getCharacterById', () => {
  test('fetches a character by ID from the API and returns the result', async () => {
    const characterId = 1;
    const mockData = { id: characterId, name: 'Rick Sanchez' };

    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const character = await getCharacter(characterId);

    expect(character).toEqual(mockData);
  });

  test('handles error when fetching a character by ID', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('Character not found'));
  
    await expect(getCharacter(1)).rejects.toThrow('Character not found');
  });
});