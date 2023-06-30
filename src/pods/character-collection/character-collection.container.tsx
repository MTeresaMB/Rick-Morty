import React from "react";
import './components/character-collection-barSearch/character-collection-searchBar.style.css';
import { LinkRoutes } from "core/router";
import { useCharacterCollection } from "./character-collection.hook";
import { useNavigate } from "react-router-dom";
import { useCharacterSearch } from "./components/character-collection-barSearch/character-collection-searchBar.hook";
import { CharacterCollectionComponent } from "./character-collection.component";
import { PaginationComponent } from "./components/character-collection-pagination/character-collection-pagination.component";

export const CharacterCollectionContainer: React.FC = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();

  // character-collection-searchBar component
  const { filterSearch, setFilterSearch, character, handleSearch } = useCharacterSearch();

  // character-collection-pagination component
  const [ currentPage, setCurrentPage ] = React.useState(1);
  const [ cardsPerPage ] = React.useState(6);
	const lastCardIndex = currentPage * cardsPerPage;
	const firstCardIndex = lastCardIndex - cardsPerPage;
	const currentCards = character.slice(firstCardIndex, lastCardIndex);

  // links to detail pages
  const navigate = useNavigate();

  // call character api
  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  // navigate to detail character
  const handleDetail = (id: number) => {
    navigate(LinkRoutes.detailCharacter(Number(id)));
  };

  // filter characters 
  React.useEffect(() => {
    handleSearch();
  }, [filterSearch]);

  // change pagination 
  const handlePageChange = (selected: number) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <input className="inputSearch"
        type="text"
        value={filterSearch}
        onChange={(e) => setFilterSearch(e.target.value)}
        placeholder="Search Characters"
        />
      <CharacterCollectionComponent
        characterCollection={currentCards}
        onDetail={handleDetail}
      />
      <PaginationComponent
        totalCards={characterCollection.length}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
