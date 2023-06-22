import React from 'react';
import axios from 'axios';

export const CharacterSearch = ({ onSearch }) => {
  const [filter, setFilter] = React.useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${filter}`);
      if (response && response.data && response.data.results) {
        const filteredCharacters = response.data.results;
        onSearch(filteredCharacters);
        console.log(filteredCharacters)
      } else {
        throw new Error('Error fetching characters');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log(setFilter)
  };

  const handleSearchClick = () => {
    handleSearch();
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search Characters" />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};
