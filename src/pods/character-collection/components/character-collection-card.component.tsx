import React from 'react';
import { CharacterEntityVM } from '../character-collection.vm';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';



interface Props {
	character: CharacterEntityVM;
	onDetail: (id: string) => void;
}

export const CharacterCollectionCard: React.FC<Props> = (props) => {
	const { character, onDetail } = props;

	return (
		<Card>
			<CardHeader>{character.name}</CardHeader>
			<CardContent>
				<CardMedia image={character.image} style={{ height: 50, width: 50}} />
			</CardContent>
			<CardActions>
				<Button variant='contained' onClick={() => onDetail(character.id)}>More Info</Button>
			</CardActions>
		</Card>
	
	)
}