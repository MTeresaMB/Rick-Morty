import React from 'react';
import { CharacterEntityVM } from 'pods/character-collection';
import { useNavigate } from 'react-router-dom';
import { LinkRoutes } from 'core/router';
import './character-detail-card.style.css';
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
		<div className="cardContainer">
			<div className="cardContent">
				<div className="imageContainer">
					<img src={character.image} alt="character rick and morty" />
				</div>
				<div >
					<div>
						<h3>Name:{character.name}</h3>
						<p>{character.species}</p>
						<p>{character.gender}</p>
					</div>
				</div>
				<div>
					<button onClick={handleBackNavigate}>Back</button>
				</div>
			</div>	
		</div>
	)

}