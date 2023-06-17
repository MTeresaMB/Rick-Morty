import React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => { 
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((results) =>
      setCharacterCollection(mapToCollection(results, mapFromApiToVm)));
  }
  return {characterCollection, loadCharacterCollection};
}