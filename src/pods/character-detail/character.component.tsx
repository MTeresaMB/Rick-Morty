import React from 'react';
import { CharacterDetail } from './character.vm';
import { CharacterDetailCard } from './components/character-detail-card.component';

interface Props {
	character: CharacterDetail;
}

export const CharacterComponent: React.FC<Props> = (props) => {
	const { character } = props;
	return (
		<CharacterDetailCard character={character}/>	
	)
}