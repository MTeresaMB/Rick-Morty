import React from 'react';
import { CharacterEntityVM } from './character-collection.vm';
import { CharacterCollectionCard } from './components/character-collection-card.component';

interface Props {
	characterCollection: CharacterEntityVM[];
	onDetail: (id: number) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
	const { characterCollection, onDetail } = props;
	return (
		<div>
			<ul>
				{characterCollection.map((character) => (
					<li key={character.id}>
						<CharacterCollectionCard character={character} onDetail={onDetail}/>

					</li>
				))}
			</ul>
		</div>

		)
}