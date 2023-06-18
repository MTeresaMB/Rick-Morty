import React from 'react';
import { CharacterDetail, CharacterDetailEmpty } from './character.vm'
import { mapCharacterFromApiToViewModel } from './character.mapper';
import { CharacterComponent } from './character.component';
import { useParams } from 'react-router-dom';
import * as api from './api';

export const CharacterContainer: React.FC = () => {
	const [character, setCharacter] = React.useState<CharacterDetail>(CharacterDetailEmpty);
	const { id } = useParams<{ id: string }>();

	const handleLoadCharacter = async () => {
		const response = await api.getCharacter(id);
		setCharacter(mapCharacterFromApiToViewModel(response));
	}

	React.useEffect(() => { handleLoadCharacter() }, []);

	return <CharacterComponent character={character}/>
}