import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { switchRoutes } from './routes'
import { CharacterListScene, CharacterDetailScene } from '@/scenes'

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.characterList}/>}></Route>
        <Route path={switchRoutes.characterList} element={<CharacterListScene />}></Route>
        <Route path={switchRoutes.detailCharacter} element={<CharacterDetailScene />}></Route>
      </Routes>
    </HashRouter>
  )
}
