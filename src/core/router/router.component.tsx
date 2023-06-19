import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from '../../scenes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.characterCollection}/>}></Route>
        <Route path={switchRoutes.characterCollection} element={<CharacterCollectionScene />}></Route>
        <Route path={switchRoutes.detailCharacter} element={<CharacterScene />}></Route>
      </Routes>
    </HashRouter>
  )
}