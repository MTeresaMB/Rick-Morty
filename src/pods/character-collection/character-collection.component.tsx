import React from 'react';
import { CharacterEntityVm } from './character-collection.vm';


interface Props {
  characterCollection: CharacterEntityVm[];
  onDetail: (id: number) => void;
}

export const characterCollectionComponent: React.FC<Props> = (props) => {
  const { characterCollection, onDetail } = props;
  return (
    <div>
      <ul>{characterCollection.map((character) => 
        <li key={character.id}>{character.name} onDetail={onDetail}</li>
      )}</ul>
    </div>
  )
}