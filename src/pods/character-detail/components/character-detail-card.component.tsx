import React from 'react';
import { CharacterEntityVM } from 'pods/character-collection';
import { useNavigate } from 'react-router-dom';
import { LinkRoutes } from 'core/router';
import { Button, Card, CardActions, CardContent } from '@mui/material';

interface Props {
	character: CharacterEntityVM;
}

export const CharacterDetailCard: React.FC<Props> = (props: Props) => {
	const { character } = props;
	const navigate = useNavigate();
	const handleBackNavigate = () => {
		return navigate(LinkRoutes.characterCollection);
	}

	return (
		<Card>
			<CardContent>
				<div>
					<h3>Name: {character.name}</h3>
					<p>{character.species}</p>
					<p>{character.gender}</p>
				</div>

			</CardContent>
			<CardActions>
				<Button variant='contained' onClick={handleBackNavigate}>Back</Button>
			</CardActions>
		</Card>	
	)

}