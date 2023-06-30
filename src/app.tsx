import { RouterComponent } from 'core/router';
import { useCharacterCollection } from 'pods/character-collection/character-collection.hook';
import React, { createContext} from 'react';


export const App: React.FC = () => {

  return (
    <>
      <RouterComponent/>
    </>
  )
}