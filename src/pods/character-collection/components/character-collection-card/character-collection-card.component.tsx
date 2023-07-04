import React from "react";
import { CharacterEntityVM } from "@/pods/character-collection";
import { VoltageButton } from "../character-collection-buttonInfo/character-collection-buttonInfo.component";
import "../character-collection-card/character-collection-card.style.css";
interface Props {
  character: CharacterEntityVM;
  onDetail: (id: number) => void;
}

export const CharacterCollectionCard: React.FC<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <div className="card">
      <div className="cardImg">
        <img src={character.image} alt="character rick and morty" />
      </div>
      <div className="dataContent">
        <div className="nameContent">
          <h4>{character.name}</h4>
        </div>
        <VoltageButton onClick={() => onDetail(character.id)} />
      </div>
    </div>
  );
};
