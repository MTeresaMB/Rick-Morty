import React from 'react';
import axios from 'axios';
import { CharacterEntityVM } from 'pods/character-collection/character-collection.vm';
import { useDebounce } from 'use-debounce';
import { SearchContext } from '@/providers/charactersFiltersContext';

export const useCharacterSearch = () => {
  const [character, setCharacter] = React.useState<CharacterEntityVM[]>([]);
  const [filterSearch, setFilterSearch] = React.useState('');
  const [debouncedFilter] = useDebounce(filterSearch, 1500);
  const searchContext = React.useContext(SearchContext);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${debouncedFilter}`,
      );
      if (response.status === 200) {
        const data = response.data
				setCharacter(data.results);
        searchContext.setLastSearch(filterSearch)
      } else {
        throw new Error('Error fetching members');
      }
    } catch (error) {}
  };

 
  React.useEffect(() => {
    if(filterSearch !== ''){
      handleSearch();
    }
  }, [debouncedFilter]);

  return { filterSearch, setFilterSearch, character, handleSearch }
};
