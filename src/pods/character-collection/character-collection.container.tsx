import React from 'react';
import { characterCollectionComponent } from './character-collection.component';
import { LinkRoutes } from 'core/router';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
}