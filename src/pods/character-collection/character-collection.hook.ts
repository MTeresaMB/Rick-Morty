import React from 'react';
import { CharacterEntityVM } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '@/common/mappers';


export const useCharacterCollection = () => {
	const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVM[]>([]);

	const loadCharacterCollection = () => {
		getCharacterCollection().then((results) => {
			setCharacterCollection(mapToCollection(results, mapFromApiToVm))
		});
	};
  return { loadCharacterCollection, characterCollection};
}