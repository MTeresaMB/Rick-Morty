import React from 'react';
import { Character } from './character.vm';
import { CharacterDetailCard } from './components/character-detail-card.component';

interface Props {
	character: Character;
}

export const CharacterComponent: React.FC<Props> = (props) => {
	const { character } = props;
	return (
		<div className="cardContainer">
			<CharacterDetailCard character={character}/>	
		</div>
	)
}