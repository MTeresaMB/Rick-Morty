import React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { LinkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';
import { PaginationComponent } from './components/character-collection-pagination/character-collection-pagination.component';

export const CharacterCollectionContainer = () => {
	const { characterCollection, loadCharacterCollection } = useCharacterCollection();
	const [currentPage, setCurrentPage] = React.useState(1);
	const [postsPerPage] = React.useState(6); 
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = characterCollection.slice(firstPostIndex, lastPostIndex);
	const navigate = useNavigate();

	React.useEffect(() => {
		loadCharacterCollection();
	}, []);

	const handleDetail = (id: number) => {
		navigate(LinkRoutes.detailCharacter(Number(id)));
	}
	return (
		<>
			<CharacterCollectionComponent characterCollection={currentPosts} onDetail={handleDetail}/>	
			<PaginationComponent totalPosts={characterCollection.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
		</>
	)
}	