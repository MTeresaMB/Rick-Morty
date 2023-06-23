import React from 'react';
import axios from 'axios';
import { CharacterEntityVM } from 'pods/character-collection/character-collection.vm';
import { useDebounce } from 'use-debounce';

export const useCharacterSearch = () => {
  const [character, setCharacter] = React.useState<CharacterEntityVM[]>([]);
  const [filterSearch, setFilterSearch] = React.useState('');
  const [debouncedFilter] = useDebounce(filterSearch, 3000);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${filterSearch}`,
      );
      if (response.status === 200) {
        const data = response.data
				setCharacter(data.results);
      } else {
        throw new Error('Error fetching members');
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    handleSearch();
  }, [debouncedFilter]);

  return {filterSearch, setFilterSearch, character, handleSearch}
};
