import React from "react";
import { CharacterEntityVM } from "pods/character-collection";
import { useNavigate } from "react-router-dom";
import { LinkRoutes } from "core/router";
import "./character-detail-card.style.css";
interface Props {
  character: CharacterEntityVM;
}

export const CharacterDetailCard: React.FC<Props> = (props: Props) => {
  const { character } = props;
  const navigate = useNavigate();
  const handleBackNavigate = () => {
    return navigate(LinkRoutes.characterCollection);
  };

  return (
    <div className="cardContainerDetail">
      <div className="cardDetail">
        <div className="imageContainerDetail">
          <img src={character.image} alt="character rick and morty" />
        </div>
        <div>
          <div className="nameCharacter">{character.name}</div>
          <div className="statusCharacter">
            {character.status + " - " + character.species}
          </div>
          <div className="genderCharacter">
            <span>Gender: </span>
            {character.gender}
          </div>
          <div className="originCharacter">
            <span>Origin: </span>
            {character.origin.name}
          </div>
          <div className="locationCharacter">
            <span>Location: </span>
            {character.location.name}
          </div>
        </div>
        <div className="buttonContainer">
          <button className="buttonBack" onClick={handleBackNavigate}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
