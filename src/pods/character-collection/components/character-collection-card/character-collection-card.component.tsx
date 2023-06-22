import React from "react";
import { CharacterEntityVM } from "../../character-collection.vm";
import { VoltageButton } from "../character-collection-buttonInfo/character-collection-buttonInfo.component";
import "../character-collection-card/character-collection-card.style.css";
interface Props {
  character: CharacterEntityVM;
  onDetail: (id: number) => void;
}

export const CharacterCollectionCard: React.FC<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <div className="cardContent">
      <div className="imageContainer">
        <img src={character.image} alt="character rick and morty" />
      </div>
      <div className="dataContent">
        <div className="nameContent">
          <h4>{character.name}</h4>
        </div>
        <div>
          <p>{character.status + " - " + character.species}</p>
        </div>
        <div>
          <p>{character.gender}</p>
        </div>
        <div>
          <p>{"Origin: " + character.origin.name}</p>
        </div>
        <div>
          <p>{"Location: " + character.location.name}</p>
        </div>
        <VoltageButton onClick={() => onDetail(character.id)} />
      </div>
    </div>
  );
};
