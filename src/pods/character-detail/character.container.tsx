import React from 'react';
import { Character, CharacterDetailEmpty } from './character.vm'
import { mapCharacterFromApiToViewModel } from './character.mapper';
import { CharacterComponent } from './character.component';
import { useParams } from 'react-router-dom';
import { getCharacter } from './api';

export const CharacterContainer: React.FC = () => {
	const [character, setCharacter] = React.useState<Character>(CharacterDetailEmpty);
	const { id } = useParams<{ id: string }>();

	const handleLoadCharacter = async() => {
		const response = await getCharacter(Number(id));
		setCharacter(mapCharacterFromApiToViewModel(response));
	}

	React.useEffect(() => { handleLoadCharacter() }, []);

	return <CharacterComponent character={character}/>
}