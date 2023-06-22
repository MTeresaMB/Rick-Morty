import React from "react";
import { CharacterEntityVM } from "./character-collection.vm";
import { CharacterCollectionCard } from "./components/character-collection-card/character-collection-card.component";
import "./components/character-collection-card/character-collection-card.style.css";
interface Props {
  characterCollection: CharacterEntityVM[];
  onDetail: (id: number) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const { characterCollection, onDetail } = props;
  return (
    <div className="cardContainer">
      {characterCollection.map((character) => (
        <CharacterCollectionCard
          key={character.id}
          character={character}
          onDetail={onDetail}
        />
      ))}
    </div>
  );
};
