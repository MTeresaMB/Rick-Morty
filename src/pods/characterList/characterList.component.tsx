import React from 'react'
import type { CharacterListEntity } from './hooks'
import { CharacterListCard } from './components/characterListCard/characterListCard'
import './components/characterListCard/characterListCard.style.scss'

interface CharacterComponentsProps {
  characterList: CharacterListEntity[]
  onDetail: (id: number) => void
}

export const CharacterListComponent: React.FC<CharacterComponentsProps> = ({ characterList, onDetail }) => {
  return (
    <div className='cardContainer'>
      {characterList.map((character) => (
        <CharacterListCard
          key={character.id}
          character={character}
          onDetail={onDetail}
        />
      ))}
    </div>
  )
}
