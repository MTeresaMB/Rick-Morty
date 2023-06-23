import React from "react";
import { useCharacterCollection } from "./character-collection.hook";
import { CharacterCollectionComponent } from "./character-collection.component";
import { LinkRoutes } from "core/router";
import { useNavigate } from "react-router-dom";
import { useCharacterSearch } from "./components/character-collection-barSearch/character-collection-searchBar.hook";
import { PaginationComponent } from "./components/character-collection-pagination/character-collection-pagination.component";
import './components/character-collection-barSearch/character-collection-searchBar.style.css';

export const CharacterCollectionContainer: React.FC = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();

  // character-collection-searchBar component
  const { filterSearch, setFilterSearch, character, handleSearch } = useCharacterSearch();

  // character-collection-pagination component
  const [ currentPage, setCurrentPage ] = React.useState(1);
  const [ postsPerPage ] = React.useState(6);
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = character.slice(firstPostIndex, lastPostIndex);

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
        characterCollection={currentPosts}
        onDetail={handleDetail}
      />
      <PaginationComponent
        totalCards={characterCollection.length}
        cardsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
